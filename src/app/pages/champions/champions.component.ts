import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  constructor(private selectPageService: SharedService) {}

  ngOnInit() {
    this.selectPageService.setSelectPage('champions');
  }
}
