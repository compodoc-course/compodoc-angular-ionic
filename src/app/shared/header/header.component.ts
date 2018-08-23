import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor( private router: Router) {}

  ngOnInit() {}

  logout() {
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, close session!'
    }).then(result => {
      if (result.value) {
        console.log('go to login...');
        localStorage.setItem('user_credentials', null);
        this.router.navigate(['/login']);
      }
    });
  }
}
