// sidebar.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'dashboard',
      icon: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { title: 'User', url: 'user', icon: 'fas fa-user' },
        { title: 'Product', url: 'product', icon: 'fas fa-box' },
        { title: 'Position', url: 'position', icon: 'fas fa-cube' },
      ],
    },
  ];

  constructor() {}
}
