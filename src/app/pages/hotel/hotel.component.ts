import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';
import { ConfigurationService } from './../tables/configuration.service';
import { AlertService } from '../../services/alert.service';
import { SharedService } from '../../services/shared.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  showInfo = false;
  configuration;
  columns = [
    { key: 'id', title: 'ID' },
    { key: 'code', title: 'Code' },
    { key: 'name', title: 'Name' },
    { key: 'stars', title: 'Number of stars' },
    { key: 'rooms', title: 'Total rooms' },
    { key: 'manage', title: 'Manage' }
  ];
  data;
  selected;
  modal = false;
  constructor(
    private hotel: HotelService,
    private alertService: AlertService,
    private selectPageService: SharedService
  ) {}

  ngOnInit() {
    this.selectPageService.setSelectPage('hotel');
    this.alertService.loadData(
      'Cargando datos de los hoteles',
      '¡¡En un instante accederás!!'
    );
    this.hotel.getAll().subscribe(res => {
      this.data = res;
      this.showInfo = true;
      this.alertService.closeAlert();
    });
    this.configuration = ConfigurationService._config;
  }

  onEvent(event) {
    this.selected = JSON.stringify(event.value.row, null, 2);
  }

  showDetailsAndEdit() {
    console.log(this.selected);
    this.addHotelForm();
  }

  async addHotelForm() {
    const { value: formValues } = await swal({
      title: 'Multiple inputs',
      html:
        '<div class="form-group">' +
        '<label for= "exampleInputEmail1" > Email address</ label >' +
        '<input type="email" class= "form-control" id = "exampleInputEmail1" aria - describedby="emailHelp" placeholder = "Enter email" >' +
        '<small id="emailHelp" class= "form-text text-muted" > We\'ll never share your email with anyone else.</small>' +
        '</div>' +
        '<label>Text</label><input id="swal-input1" class="swal2-input">' +
        '<input id="swal-input2" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById('exampleInputEmail1') as HTMLInputElement)
            .value,
          (document.getElementById('swal-input1') as HTMLInputElement).value,
          (document.getElementById('swal-input2') as HTMLInputElement).value
        ];
      }
    });

    if (formValues) {
      console.log(JSON.stringify(formValues));
    }
  }
}
