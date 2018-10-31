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

  /**
   * @ignore
   */
  ngOnInit() {
    const user = this.localStorage.takeUserLoginData();
    if (user !== null) {
      this.router.navigate(['/dashboard']);
    }
  }

  /**
   * Make login function.
   * Only take local data and storage in local with "user_credentials" key and after go to dashboard route
   */
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
