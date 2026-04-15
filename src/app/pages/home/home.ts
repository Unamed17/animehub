import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Header } from '../../headfoot/header/header';
import { Footer } from '../../headfoot/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  username: string | null = '';

  isMenuOpen: boolean = false; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Slideshow Variables
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

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  const user = localStorage.getItem('savedEmail');

  if (!user) {
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

  logout() {
  localStorage.removeItem('savedEmail'); 
  this.router.navigate(['/login']);
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
}