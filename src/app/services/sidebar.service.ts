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
      title: 'Tables',
      icon: 'fas fa-table',
      route: '/tables'
    },
    {
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
    },
    {
      title: 'Other',
      icon: 'fas fa-th-list',
      route: '*',
      submenu: [
        { title: 'Navbar', url: '/navbar' },
        { title: 'Cards', url: '/cards' },
        { title: 'Maps', url: '/maps' },
        { title: 'Video Player', url: '/video' },
      ]
    }
  ];
}
