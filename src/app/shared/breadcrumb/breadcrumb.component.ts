import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  selectPage: string;
  constructor( private selectPageService: SharedService) { }

  ngOnInit() {
    this.selectPageService.change.subscribe(page => {
      this.selectPage = page;
    });
  }

}
