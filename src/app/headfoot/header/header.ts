import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  username: string = 'Barry';
  isNavbarHidden = false;
  lastScrollTop = 0;
  isMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/home']);
  }

  logout() {
  localStorage.removeItem('savedEmail'); // Clear the session
  localStorage.removeItem('savedUsername');
  this.router.navigate(['/login']);
}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isNavbarHidden = true;
    } else {
      this.isNavbarHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  goHome() { this.router.navigate(['/home']); }
  goContact() { this.router.navigate(['/contact']); }
  goAbout() { this.router.navigate(['/about']); }
}