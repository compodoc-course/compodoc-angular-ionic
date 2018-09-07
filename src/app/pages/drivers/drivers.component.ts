import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  constructor(private selectPageService: SharedService) {}

  ngOnInit() {
    this.selectPageService.setSelectPage('drivers');
  }
}
