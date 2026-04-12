import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements OnInit, OnDestroy {
  
  animeImages: string[] = [
    './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg',
    './images/5.jpg', './images/6.jpg', './images/7.jpg', './images/8.jpg',
    './images/9.jpg', './images/10.jpg'
  ];
  
  currentImageIndex: number = 0;
  slideshowInterval: any;

  isNavbarHidden: boolean = false;
  lastScrollTop: number = 0;
  isMenuOpen: boolean = false; 
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    console.log("Hamburger Clicked! Menu is now:", this.isMobileMenuOpen);
    
    // This FORCES Angular to wake up and apply the CSS class instantly
    this.cdr.detectChanges();
  }

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.stopSlideshow();
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

  // --- SCROLL & MENU LOGIC ---
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
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