import { Component, OnInit, Input } from '@angular/core';
import { Marker } from '../../models/marker.model';
import { Circuit } from '../../interfaces/circuit.interface';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  markers: any = [];
  lat = 23.022505;
  lng = 72.571362;
  @Input()
  circuitsData: Circuit[];
  constructor() {}
  ngOnInit() {
    console.log(this.circuitsData.length);

    if (this.circuitsData.length === 0) {
      this.markers.push(
        new Marker(
          'Current Location',
          this.lat,
          this.lng,
          'Location not defined'
        )
      );
    } else {
      for (let i = 0; i < this.circuitsData.length; i++) {
        this.markers.push(
          new Marker(
            this.circuitsData[i].circuitName,
            +this.circuitsData[i].Location.lat,
            +this.circuitsData[i].Location.long,
            this.circuitsData[i].Location.locality
          )
        );
      }
    }
  }
}
