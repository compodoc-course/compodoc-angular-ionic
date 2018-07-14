import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  findClassToggled = 'sidenav-toggled';
  constructor() {}

  ngOnInit() {}

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
