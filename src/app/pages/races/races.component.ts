import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { AlertService } from '../../services/alert.service';
import { RacesService } from '../../services/api/races.service';
import { Race } from '../../interfaces/race.interface';

@Component({
  selector: `app-races`,
  templateUrl: `./races.component.html`,
  styleUrls: [`./races.component.css`]
})
export class RacesComponent implements OnInit {
  showInfo = false;
  racesList: Race[];
  selectYear: string;
  constructor(
    private selectPageService: SharedService,
    private _racesService: RacesService,
    private _alertService: AlertService
  ) {}

  /**
   * @ignore
   */
  ngOnInit() {
    this.selectPageService.setSelectPage(`races`);
    this.loadDataFromAssets();
  }

  /**
   * load/close dialog function
   * @param open pass boolean to specify if dialog open or close
   */
  private loadDataDialog(open: boolean = true) {
    if (open) {
      this._alertService.loadData(
        `Load ${this.selectYear} races list!!`,
        `Wait a moment please!!`
      );
    } else {
      this._alertService.closeAlert();
    }
  }

  /**
   * Take data from a local file in json format. Select year is 2018
   */
  private loadDataFromAssets() {
    this.selectYear = `2018`;
    this.loadDataDialog();
    this._racesService.loadListFromLocal().subscribe((data: Race[]) => {
      this.selectPageService.setSelectPage(`${this.selectYear} year races`);
      console.log(data);
      this.showInfo = true;
      this.racesList = data;
      this.loadDataDialog(false);
    });
  }
}
