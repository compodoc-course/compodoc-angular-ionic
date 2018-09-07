import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    _username: '',
    _password: '',
    _target_path: '',
    _failure_path: '/api/user/fail'
  };
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    const user = this.localStorage.takeUserLoginData();
    if (user !== null) {
      this.router.navigate(['/dashboard']);
    }
  }

  makeLogin() {
    this.localStorage.saveDataInLocal(
      'user_credentials',
      {
        email: 'anartz@compodoc.com',
        name: 'Anartz',
        lastname: 'Mugika',
        role: 'ROLE_ADMIN'
      },
      true
    );
    this.router.navigate(['/dashboard']);
  }
}
