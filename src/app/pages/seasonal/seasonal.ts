import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seasonal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seasonal.html',
  styleUrls: ['./seasonal.css']
})
export class Seasonal implements OnInit {

  isNavbarHidden: boolean = false;
  lastScrollTop: number = 0;

  // NEW: Tracks if the mobile menu is open or closed
  isMenuOpen: boolean = false; 

  // NEW: Flips the switch when you click the hamburger icon
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  // NEW: The listener that detects scroll direction
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Get the current scroll position
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If we scroll DOWN and we are past the very top of the page (e.g., 50px)
    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isNavbarHidden = true; // Hide the navbar
    } else {
      // If we scroll UP
      this.isNavbarHidden = false; // Show the navbar
    }

    // Update the last scroll position to the current one for the next check
    // (The <= 0 check prevents weird bouncing behaviors on Mac/mobile)
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
  }

  // ... (keep your existing nextSlide, prevSlide, resetTimer, and navigation methods here) ...

  
  seasonalList: any[] = [];
  isLoading: boolean = true; // Tells the HTML when to show the loading message

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.fetchSeasonalAnime();
  }

  goHome() {
    this.router.navigate(['/home']);
  }
  goContact() {
    this.router.navigate(['/contact']);
  }
  goAbout() {
    this.router.navigate(['/about']);
  }


  fetchSeasonalAnime() {
    // The Jikan API endpoint for the current season
    const apiUrl = 'https://api.jikan.moe/v4/seasons/now';
    
    this.http.get(apiUrl).subscribe({
      next: (response: any) => {
        this.seasonalList = response.data.slice(0, 20); // Grab the top 20
        this.isLoading = false; // Turn off the loading message
      },
      error: (err) => {
        console.error('API Error:', err);
        this.isLoading = false;
      }
    });
  }
}