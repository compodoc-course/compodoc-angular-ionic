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
  login: Login = {
    _username: '',
    _password: '',
    _target_path: '',
    _failure_path: '/api/user/fail'
  };

  constructor(
    private _login: LoginService,
    private router: Router,
    private alertService: AlertService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {}

  makeLogin() {
    this.login._target_path = `/api/users/${this.login._username}`;
    this.alertService.loadData(
      'Comprobando los datos de acceso',
      '¡¡En un instante accederás!!'
    );
    this._login.setLogin(this.login).subscribe(
      data => {
        // this.router.navigate(['/heroe', data.name]);
        console.log(data);
        this.alertService
  .closeAlert();
        this.localStorage.saveUserCredentials(data);
        this.router.navigate(['/dashboard']);
      },
      error => console.error(error)
    );
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }
}
