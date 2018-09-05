import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { StayService } from './stay.service';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {
  staysList: Array<Stay>;
  totalResults: number;
  pages: number;
  constructor(
    private selectPageService: SharedService,
    private stayService: StayService
  ) {}

  ngOnInit() {
    this.selectPageService.setSelectPage('stay');
    this.stayService.getLast().subscribe(data => {
      this.staysList = data.items;
      console.log(this.staysList);
      this.totalResults = data.total_count;
      this.pages = this.totalResults / 10;
      if (this.totalResults % 10 > 0) {
        this.pages++;
      }
      this.pages = new RoundPipe().transform(this.pages, 0);
    });
  }
}
