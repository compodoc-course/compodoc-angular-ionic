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
    this.selectYearCircuits();
  }

  selectYearCircuits(year: string = String(new Date().getFullYear())) {
    this.selectYear = year;
    this._alertService.loadData(
      `Load ${this.selectYear} season circuits list!!`,
      'Wait a moment please!!'
    );
    this._circuitService.listByYear(year).subscribe(
      (data: Circuit[]) => {
        this.selectPageService.setSelectPage(
          `Circuits List to  ${this.selectYear} season`
        );
        this.circuitsList = data;
        this.showInfo = true;
        this._alertService.closeAlert();
      },
      errorService => {}
    );
  }
}
