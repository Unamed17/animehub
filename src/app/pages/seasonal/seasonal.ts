import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Header } from '../../headfoot/header/header';
import { Footer } from '../../headfoot/footer/footer';

@Component({
  selector: 'app-seasonal',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './seasonal.html',
  styleUrls: ['./seasonal.css']
})
export class Seasonal implements OnInit {

  isNavbarHidden: boolean = false;
  lastScrollTop: number = 0;


  isMenuOpen: boolean = false; 

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



  
  seasonalList: any[] = [];
  isLoading: boolean = true;

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

    const apiUrl = 'https://api.jikan.moe/v4/seasons/now';
    
    this.http.get(apiUrl).subscribe({
      next: (response: any) => {
        this.seasonalList = response.data.slice(0, 20); // top 20
        this.isLoading = false;
      },
      error: (err) => {
        console.error('API Error:', err);
        this.isLoading = false;
        alert("API is busy. Please wait a few seconds and refresh.");
      }
    });
  }
}