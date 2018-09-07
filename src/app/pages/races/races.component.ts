import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  constructor(private selectPageService: SharedService) {}

  ngOnInit() {
    this.selectPageService.setSelectPage('races');
  }
}
