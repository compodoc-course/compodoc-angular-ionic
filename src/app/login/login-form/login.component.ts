import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private alertService: AlertService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {}

  makeLogin() {
    this.localStorage.saveDataInLocal('user_credentials',
    {
      email: 'anartz@compodoc.com',
      name: 'Anartz',
      lastname: 'Mugika',
      role: 'ROLE_ADMIN'
    }, true);
    this.router.navigate(['/dashboard']);
  }
}
