import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userNameLastname: string;
  constructor(private router: Router, private alertService: AlertService, private localStorage: LocalStorageService) { }

  ngOnInit() {
    const loginData = this.localStorage.takeUserLoginData();
    this.userNameLastname =  `${loginData.name} ${loginData.lastname}`;
  }

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
        localStorage.setItem('user_credentials', null);
        this.router.navigate(['/login']);
      }
    });
  }
}
