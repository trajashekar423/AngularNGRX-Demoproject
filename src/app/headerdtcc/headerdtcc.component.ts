import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headerdtcc',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './headerdtcc.component.html',
  styleUrl: './headerdtcc.component.css'
})
export class HeaderdtccComponent {

  navItems = [
    { label: 'navigaton one', link: '/', active: true },
    { label: 'navigaton two', link: '/features', active: false },
    { label: 'navigaton three', link: '/pricing', active: false },
    { label: 'navigaton four', link: '/contact', active: false }
  ];

  iconItems = [
    { icon: 'fa-search', link: '/search', label: 'Search' },
    { icon: 'fa-bell', link: '/notifications', label: 'Notifications' },
    { icon: 'fa-th-large', link: '/dashboard', label: 'Dashboard' },  // Grid icon
    { icon: 'fa-user-circle', link: '/profile', label: 'Profile' },
    { icon: 'fa-sign-out', link: '/logout', label: 'Logout' }
  ];

  // Function to handle active link
  setActive(item: any) {
    this.navItems.forEach(navItem => navItem.active = false);
    item.active = true;
  }
}
