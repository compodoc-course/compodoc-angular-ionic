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

  /**
   * Load sidebar menu items and check if sidebar toggled or no
   * @param _sidebar Service to take sidebar items info
   */
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

  /**
   * Function to toggled or expanse sidebar section and save config in local storage to future
   */
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
