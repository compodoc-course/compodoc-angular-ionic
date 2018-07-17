import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  findClassToggled = 'sidenav-toggled';
  toggledSideNav: boolean;
  constructor( public _sidebar: SidebarService) {
    if (localStorage.getItem('toggleSideNav') === '1') {
      document
        .getElementById('page-top')
        .classList.add(this.findClassToggled);
    } else {
      document
        .getElementById('page-top')
        .classList.remove(this.findClassToggled);
    }
  }

  // sidenav-toggled

  hello() {
    console.log('hello');
  }

  toggled(toggler: boolean = false) {
    const find = document.getElementsByClassName(this.findClassToggled)[0];
    if (find !== undefined) {
      // remove
      find.classList.remove(this.findClassToggled);
      localStorage.setItem('toggleSideNav', '0');
    } else {
      const takePageTopId = document.getElementById('page-top');
      // add
      takePageTopId.classList.add(this.findClassToggled);
      localStorage.setItem('toggleSideNav', '1');
    }
  }
}
