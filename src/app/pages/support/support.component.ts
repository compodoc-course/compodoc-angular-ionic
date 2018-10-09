import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  constructor(private selectPageService: SharedService) {}
  /**
   * @ignore
   */
  ngOnInit() {
    this.selectPageService.setSelectPage('Support');
  }
}
