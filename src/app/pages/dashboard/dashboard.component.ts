import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { LocalStorageService } from '../../services/local-storage.service';
/**
 * @ignore
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private selectPageService: SharedService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.user = this.localStorageService.takeUserLoginData();
    this.selectPageService.setSelectPage('dashboard');
    if (this.user === null) {
      this.router.navigate(['/login']);
    }
  }
}
