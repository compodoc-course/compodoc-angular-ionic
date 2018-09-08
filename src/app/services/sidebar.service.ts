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
      title: 'Seasons',
      icon: 'fas fa-award',
      route: '/seasons'
    },
    {
      title: 'Charts',
      icon: 'fas fa-chart-line',
      route: '/charts'
    },
    {
      title: 'Drivers',
      icon: 'fas fa-car',
      route: '/drivers'
    },
    {
      title: 'Circuits',
      icon: 'fas fa-road',
      route: '/circuits'
    },
    {
      title: 'Races',
      icon: 'fas fa-flag-checkered',
      route: '/races'
    },
    {
      title: 'Settings',
      icon: 'fas fa-wrench',
      route: '/settings'
    }
  ];
}
