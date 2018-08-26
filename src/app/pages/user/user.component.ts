import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private selectPageService: SharedService) {}

  ngOnInit() {
    this.selectPageService.setSelectPage('Users');
  }
}
