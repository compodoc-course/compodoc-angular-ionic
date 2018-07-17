import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  findClassToggled = 'sidenav-toggled';
  constructor( private _sidebar: SidebarService) {}

  ngOnInit() {
    console.log(this._sidebar.menu.length);
    console.log(this._sidebar.menu);
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
    } else {
      const takePageTopId = document.getElementById('page-top');
      // add
      takePageTopId.classList.add(this.findClassToggled);
    }
    console.log('click');
  }
}
