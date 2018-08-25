import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {

  constructor(private selectPageService: SharedService) { }

  ngOnInit() {
    this.selectPageService.setSelectPage('stay');
  }

}
