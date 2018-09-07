import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title: 'Current Year',
      icon: 'fas fa-tachometer-alt',
      route: '/dashboard'
    },
    {
      title: 'Charts',
      icon: 'fas fa-tachometer-alt',
      route: '/charts'
    },
    {
      title: 'Drivers',
      icon: 'fas fa-chart-line',
      route: '/drivers'
    },
    {
      title: 'Circuits',
      icon: 'fas fa-h-square',
      route: '/circuits'
    },
    {
      title: 'Races',
      icon: 'fas fa-users',
      route: '/races'
    },
    {
      title: 'Settings',
      icon: 'fas fa-wrench',
      route: '/settings'
    }
  ];
}
