import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { AlertService } from '../../services/alert.service';
import { CircuitsService } from '../../services/api/circuits.service';
import { Circuit } from '../../interfaces/circuit.interface';
import swal from 'sweetalert2';
import { GoogleStaticMapUrlPipe } from '../../pipes/google-static-map-url.pipe';
import { LocationTextPipe } from '../../pipes/location-text.pipe';
import { GoogleMapsUrlPipe } from '../../pipes/google-maps-url.pipe';

@Component({
  selector: `app-circuits`,
  templateUrl: `./circuits.component.html`,
  styleUrls: [`./circuits.component.css`]
})
export class CircuitsComponent implements OnInit {
  showInfo: boolean;
  selectYear: string;
  circuitsList: Circuit[];
  constructor(
    private selectPageService: SharedService,
    private _alertService: AlertService,
    private _circuitService: CircuitsService
  ) {}

  ngOnInit() {
    this.showInfo = false;
    this.selectPageService.setSelectPage(`circuits`);
    this.loadDataFromAssets();
  }
  /**
   * @example
   * Example to open dialog with pass info.
   * loadDataDialog(true)
   *
   * @param {boolean }open use boolean value to open or close select load data dialog
   */
  private loadDataDialog(open: boolean = true) {
    if (open) {
      this._alertService.loadData(
        `Load ${this.selectYear} season circuits list!!`,
        `Wait a moment please!!`
      );
    } else {
      this._alertService.closeAlert();
    }
  }
  /**
   * Take data from server. More info in:
   *  [Circuits List API Documentation]{@link https://ergast.com/mrd/methods/circuits/}
   * @example
   * This is a good example. Add years from 1950 to 2018
   * selectYearCircuits(2017)
   *
   * @param {string} year  The year to take select circuits to show
   * @returns
   */
  selectYearCircuits(year: string = String(new Date().getFullYear())) {
    this.selectYear = year;
    this.loadDataDialog();
    this._circuitService.listByYear(year).subscribe(
      (data: Circuit[]) => {
        this.selectPageService.setSelectPage(
          `Circuits List to  ${this.selectYear} season`
        );
        this.circuitsList = data;
        this.showInfo = true;
        this._alertService.closeAlert();
      },
      _errorService => {}
    );
  }

  /**
   * Take data from a local file in json format
   */
  loadDataFromAssets() {
    this.selectYear = `2018`;
    this.loadDataDialog();
    this._circuitService.loadListFromLocal().subscribe((data: Circuit[]) => {
      this.showInfo = true;
      this.selectPageService.setSelectPage(
        `Circuits List to  ${this.selectYear} season`
      );
      this.circuitsList = data;
      this.loadDataDialog(false);
    });
  }

  /**
   * @param {Circuit} circuit  Select circuit object dialog info
   * @returns
   */
  infoAlert(circuit: Circuit) {
    const googleStaticMapUrl = new GoogleStaticMapUrlPipe().transform(
      circuit.Location,
      `h`,
      `red`,
      `C`,
      1000,
      300,
      5
    );
    const locationText = new LocationTextPipe().transform(circuit.Location);
    const googleMapsUrl = new GoogleMapsUrlPipe().transform(circuit.Location);
    swal({
      title: `<br/><strong> ${circuit.circuitName} </strong>`,
      html: `Location: ${locationText} <br/><br/>
        <img class="card-img-top animated fadeIn" style="width:100%" src="${googleStaticMapUrl}"
        alt="${circuit.circuitName} circuit image">
        <br/><br/>
        <a href="${googleMapsUrl}" target="_blank">
        Open in Google Maps</a>`,
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
