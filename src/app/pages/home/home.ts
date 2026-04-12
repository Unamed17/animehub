import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  username: string | null = '';

  // 1. ADD THESE TWO LINES FOR THE HAMBURGER MENU
  isMenuOpen: boolean = false; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Slideshow Variables
  animeImages: string[] = [
    './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg',
    './images/5.jpg', './images/6.jpg', './images/7.jpg', './images/8.jpg',
    './images/9.jpg', './images/10.jpg'
  ];
  currentImageIndex: number = 0;
  slideshowInterval: any;
  isNavbarHidden: boolean = false;
  lastScrollTop: number = 0;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  // Check if we have a saved user in the "notebook"
  const user = localStorage.getItem('savedEmail');

  if (!user) {
    // If no user is found, redirect them to login immediately
    alert("Please log in to access your dashboard.");
    this.router.navigate(['/login']);
  } else {
    this.username = localStorage.getItem('savedUsername') || 'Anime Fan';
    this.startSlideshow();
  }
}

  ngOnDestroy() {
    this.stopSlideshow();
  }

  // --- LOGOUT LOGIC ---
  logout() {
  // Clear the "logged in" status
  localStorage.removeItem('savedEmail'); 
  this.router.navigate(['/login']);
}

  // --- AUTOMATIC SLIDESHOW LOGIC ---
  startSlideshow() {
    this.slideshowInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.animeImages.length;
      this.cdr.detectChanges();
    }, 3000);
  }

  stopSlideshow() {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
    }
  }

  // --- MANUAL SLIDESHOW LOGIC ---
  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.animeImages.length;
    this.resetTimer();
  }

  prevSlide() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.animeImages.length) % this.animeImages.length;
    this.resetTimer();
  }

  resetTimer() {
    this.stopSlideshow();
    this.startSlideshow();
  }

  // --- SCROLL LOGIC ---
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
}