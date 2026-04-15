import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Footer } from '../../headfoot/footer/footer';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, CommonModule, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements OnInit, OnDestroy {
  
  animeImages: string[] = [
    './images/Slideshow/1.jpg',
    './images/Slideshow/2.jpg', 
    './images/Slideshow/3.jpg', 
    './images/Slideshow/4.jpg',
    './images/Slideshow/5.jpg', 
    './images/Slideshow/6.jpg', 
    './images/Slideshow/7.jpg', 
    './images/Slideshow/8.jpg',
    './images/Slideshow/9.jpg', 
    './images/Slideshow/10.jpg'
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
    
    this.cdr.detectChanges();
  }

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }


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