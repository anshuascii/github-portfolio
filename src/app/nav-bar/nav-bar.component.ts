import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isMenuHidden = true;

  toggleMenu(): void {
    this.isMenuHidden = !this.isMenuHidden;
    const hamburgerButton = document.getElementById('menu-button');
    if (hamburgerButton) {
      hamburgerButton.classList.toggle('is-active');
    }
  }
 
    
  }


