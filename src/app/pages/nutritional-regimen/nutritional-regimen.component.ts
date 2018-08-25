import { Component, OnInit } from '@angular/core';
import { NutritionalRegimenService } from './nutritional-regimen.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-nutritional-regimen',
  templateUrl: './nutritional-regimen.component.html',
  styleUrls: ['./nutritional-regimen.component.css']
})
export class NutritionalRegimenComponent implements OnInit {
  configuration;
  columns = [
    { key: 'code', title: 'Code' },
    { key: 'desc_es', title: 'Spanish' },
    { key: 'desc_en', title: 'English' },
    { key: 'desc_eu', title: 'Euskera' },
    { key: 'desc_ca', title: 'Catalá' }
  ];
  data;
  selected;
  modal = false;
  constructor(private _nutritionalService: NutritionalRegimenService, private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.loadData('Cargando datos de los regimenes nutricionales', '¡¡En un instante accederás!!');
    this._nutritionalService.getAll().subscribe(data => {
      this.data = data;
      this.alertService.closeAlert();
    });
  }
}
