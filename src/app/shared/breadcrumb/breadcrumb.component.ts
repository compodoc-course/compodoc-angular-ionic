import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

/**
 * Breadcrumb to show info
 */
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  /**
   * Moment select page
   */
  selectPage: string;
  /**
   * Inject select page service to use and load correct breadcrumb
   * @param selectPageService service
   */
  constructor( private selectPageService: SharedService) { }
  /**
   * Initialize with select page
   */
  ngOnInit() {
    this.selectPageService.change.subscribe((page: string) => {
      this.selectPage = page;
    });
  }

}
