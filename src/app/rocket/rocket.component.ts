import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrl: './rocket.component.css'
})
export class RocketComponent {
  // Scroll functions
  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Toggle visibility based on scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollDownButton = document.getElementById('scroll-down');
    const scrollUpButton = document.getElementById('scroll-up');
    const threshold = window.innerHeight; // Height of the viewport

    if (window.scrollY > threshold) {
      scrollDownButton?.classList.add('visible');
      scrollUpButton?.classList.add('visible');
    } else {
      scrollDownButton?.classList.remove('visible');
      scrollUpButton?.classList.remove('visible');
    }
  }

}
