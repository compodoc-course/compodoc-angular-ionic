import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { DriversService } from '../../services/api/drivers.service';
import { Driver } from '../../interfaces/driver.interface';
import { AlertService } from '../../services/alert.service';
import swal from 'sweetalert2';

@Component({
  selector: `app-drivers`,
  templateUrl: `./drivers.component.html`,
  styleUrls: [`./drivers.component.css`]
})
export class DriversComponent implements OnInit, OnDestroy {
  /**
   * @ignore
   */
  selectYear: string;
  /**
   * @ignore
   */
  driversList: Driver[];
  /**
   * @ignore
   */
  showInfo: boolean;
  constructor(
    private selectPageService: SharedService,
    private _driversService: DriversService,
    private _alertService: AlertService
  ) {}
  /**
   * @ignore
   */
  ngOnInit() {
    this.showInfo = false;
    this.selectPageService.setSelectPage(`drivers`);
    this.loadDataFromAssets();
  }


  ngOnDestroy(): void {
    this.showInfo = false;
    this.driversList = [];
  }

  /**
   * Function to show / hide loading data loading.
   * @example
   * This is a good example to show loading data dialog
   * loadDataDialog(true)
   *
   * @param open Value to specify if open load data dialog
   */
  private loadDataDialog(open: boolean = true) {
    if (open) {
      this._alertService.loadData(
        `Load ${this.selectYear} season drivers!!`,
        `Wait a moment please!!`
      );
    } else {
      this._alertService.closeAlert();
    }
  }

  /**
   * Take data from server. More info in:
   *  [Drivers List API Documentation]{@link https://ergast.com/mrd/methods/drivers/}
   *
   * @example
   * This is a good example to show 2018 drivers list
   * selectYearDrivers(2018)
   *
   * @param {string} year  Select year value
   */
  selectYearDrivers(year: string = String(new Date().getFullYear())) {
    this.selectYear = year;
    this.loadDataDialog();
    this._driversService.listByYear(year).subscribe(
      (data: Driver[]) => {
        this.selectPageService.setSelectPage(
          `Drivers List to  ${this.selectYear} season`
        );
        this.driversList = data;
        this.showInfo = true;
        this._alertService.closeAlert();
      },
      _errorService => {
        this.loadDataFromAssets();
      }
    );
  }

  /**
   * Take data from a local file in json format
   */
  protected loadDataFromAssets() {
    this.selectYear = `2018`;
    this.loadDataDialog();
    this._driversService.loadListFromLocal().subscribe((data: Driver[]) => {
      console.log(data);
      this.showInfo = true;
      this.driversList = data;
      this.loadDataDialog(false);
    });
  }

  /**
   * @param {Driver} driver  Select driver object
   * @returns
   */
  infoAlert(driver: Driver) {
    swal({
      title: `<br/><strong> ${driver.givenName} ${driver.familyName} </strong>`,
      html: ``,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: `Close`,
      confirmButtonAriaLabel: `Thumbs up, great!`,
      cancelButtonText: `<i class="fa fa-thumbs-down"></i>`,
      cancelButtonAriaLabel: `Thumbs down`
    });
  }
}
