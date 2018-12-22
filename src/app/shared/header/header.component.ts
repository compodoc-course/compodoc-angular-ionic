import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { LocalStorageService } from '../../services/local-storage.service';
/**
 * Header with contain nabvars, options,...
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /**
   * Login username string to show
   */
  userNameLastname: string;
  /**
   * Add new service and clases to manage Header
   * @param router Manage routing options
   * @param alertService Show alerts service
   * @param localStorage To take credentials and login data
   */
  constructor(private router: Router, private alertService: AlertService, private localStorage: LocalStorageService) { }

  /**
   * Initialize and check if user login or no
   */
  ngOnInit() {
    const loginData = this.localStorage.takeUserLoginData();
    if (loginData === null) {
      this.userNameLastname = '';
      console.log('go to login...from header');
      this.localStorage.clearSelectData('user_credentials');
      this.router.navigate(['/login']);
    } else {
      this.userNameLastname = `${loginData.name} ${loginData.lastname}`;
    }
  }

  /**
   * Logout session and go to login path
   */
  logout() {

    this.alertService.confirm(
      {
        title: 'Are you sure ?',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, close session!'
      }
    )
    .then(result => {
      if (result.value) {
        console.log('go to login...');
        this.localStorage.clearSelectData('user_credentials');
        this.router.navigate(['/login']);
      }
    });
  }
}
