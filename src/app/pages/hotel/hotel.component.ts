import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';
import { ConfigurationService } from './../tables/configuration.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
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
  constructor(private hotel: HotelService) {}

  ngOnInit() {
    this.hotel.getAll().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
    this.hotel.getSelectItem(1).subscribe();
    this.configuration = ConfigurationService._config;
  }

  onEvent(event) {
    console.log(event);
    this.selected = JSON.stringify(event.value.row, null, 2);
  }

  showDetailsAndEdit() {
    console.log(this.selected);
  }
}
