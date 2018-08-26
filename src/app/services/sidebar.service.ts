import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      route: '/dashboard'
    },
    {
      title: 'Charts',
      icon: 'fas fa-chart-line',
      route: '/charts'
    },
    {
      title: 'Hotel',
      icon: 'fas fa-h-square',
      route: '/hotel'
    },
    {
      title: 'Users',
      icon: 'fas fa-users',
      route: '/users'
    },
    {
      title: 'Clients',
      icon: 'fas fa-user-circle',
      route: '/clients'
    },
    {
      title: 'Stay',
      icon: 'fas fa-bed',
      route: '/stays'
    },
    {
      title: 'Nutritional',
      icon: 'fab fa-nutritionix',
      route: '/nutritional-regimen'
    },
    {
      title: 'Tables',
      icon: 'fas fa-table',
      route: '/tables'
    },
    /*{
      title: 'Components',
      icon: 'fab fa-elementor',
      route: '*',
      submenu: [
        { title: 'Navbar', url: '/navbar' },
        { title: 'Cards', url: '/cards' },
        { title: 'Maps', url: '/maps' },
        { title: 'Video Player', url: '/video' },
      ]
    },
    {
      title: 'Example pages',
      icon: 'fas fa-th-list',
      route: '*',
      submenu: [
        { title: 'Navbar', url: '/navbar' },
        { title: 'Cards', url: '/cards' },
        { title: 'Maps', url: '/maps' },
        { title: 'Video Player', url: '/video' },
      ]
    },*/
    {
      title: 'Settings',
      icon: 'fas fa-wrench',
      route: '/settings'
    }
  ];
}
