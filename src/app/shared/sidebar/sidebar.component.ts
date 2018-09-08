import { Component } from '@angular/core';
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

  toggled() {
    const find = localStorage.getItem('toggleSideNav');
    if (find === '1') {
      // remove
      document
        .getElementById('page-top')
        .classList.remove(this.findClassToggled);
      localStorage.setItem('toggleSideNav', '0');
    } else {
      document
        .getElementById('page-top')
        .classList.add(this.findClassToggled);
      localStorage.setItem('toggleSideNav', '1');
    }
  }
}
