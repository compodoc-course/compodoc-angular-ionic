import { Component, OnInit } from '@angular/core';
import { SeasonsService } from '../../services/api/seasons.service';
import { Season } from '../../interfaces/seasons.interface';
import { AlertService } from '../../services/alert.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: `app-seasons`,
  templateUrl: `./seasons.component.html`,
  styleUrls: [`./seasons.component.css`]
})
export class SeasonsComponent implements OnInit {
  seasons: Season[];
  showInfo = false;
  constructor(
    private _seasonService: SeasonsService,
    private _alertService: AlertService,
    private selectPageService: SharedService
  ) {}

  ngOnInit() {
    this.selectPageService.setSelectPage(
      `All history seasons list`
    );
    this.loadDataFromAssets();
  }

  private loadDataDialog(open: boolean = true) {
    if (open) {
      this._alertService.loadData(
        `Load seasons list!!`,
        `Wait a moment please!!`
      );
    } else {
      this._alertService.closeAlert();
    }
  }

  /**
   * Take data from a local file in json format
   */
  loadDataFromAssets() {
    this.loadDataDialog();
    this._seasonService.loadListFromLocal().subscribe((data: Season[]) => {
      console.log(data);
      this.showInfo = true;
      this.seasons = data;
      this.loadDataDialog(false);
    });
  }
}
