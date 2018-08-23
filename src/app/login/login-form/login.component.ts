import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    user: '',
    password: ''
  };

  constructor() {}

  ngOnInit() {}

  loginUser() {
    console.log();
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }
}
