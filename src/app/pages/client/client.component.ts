import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private selectPageService: SharedService) { }

  ngOnInit() {
    this.selectPageService.setSelectPage('Client');
  }

}
