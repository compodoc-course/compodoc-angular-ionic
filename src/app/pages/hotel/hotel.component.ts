import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor( private hotel: HotelService) { }

  ngOnInit() {
    this.hotel.getAll().subscribe();
    this.hotel.getSelectItem(1).subscribe();
  }

}
