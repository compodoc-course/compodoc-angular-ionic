import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
})
export class CircuitsComponent implements OnInit {
  constructor(private selectPageService: SharedService) {}

  ngOnInit() {
    this.selectPageService.setSelectPage('circuits');
  }
}
