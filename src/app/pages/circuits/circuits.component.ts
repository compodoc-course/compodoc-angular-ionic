import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { AlertService } from '../../services/alert.service';
import { CircuitsService } from '../../services/api/circuits.service';
import { Circuit } from '../../interfaces/circuit.interface';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
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
    this.selectPageService.setSelectPage('circuits');
    this.loadDataFromAssets();
  }

  private loadDataDialog(open: boolean = true) {
    if (open) {
      this._alertService.loadData(
        `Load ${this.selectYear} season circuits list!!`,
        'Wait a moment please!!'
      );
    } else {
      this._alertService.closeAlert();
    }
  }

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
    this.selectYear = '2018';
    this.loadDataDialog();
    this._circuitService
      .loadListFromLocal()
      .subscribe((data: Circuit[]) => {
        this.showInfo = true;
        this.circuitsList = data;
        this.loadDataDialog(false);
      });
  }
}
