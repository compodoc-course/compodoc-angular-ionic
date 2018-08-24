import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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

  constructor(private _login: LoginService, private router: Router) {}

  ngOnInit() {}

  makeLogin() {
    this.login._target_path = `/api/users/${this.login._username}`;
    console.log(this.login);
    swal({
      title: 'Comprobando los datos de acceso',
      html: 'Espera un poco ;).',
      onOpen: () => {
        swal.showLoading();
      },
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer');
      }
    });
    this._login.setLogin(this.login).subscribe(
      data => {
        // this.router.navigate(['/heroe', data.name]);
        console.log(data);
        swal.close();
        localStorage.setItem('user_credentials', JSON.stringify(data));
        this.router.navigate(['/dashboard']);
      },
      error => console.error(error)
    );
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }
}
