import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from "../../headfoot/header/header";
import { Footer } from "../../headfoot/footer/footer";

@Component({
  selector: 'app-my-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, Header, Footer],
  templateUrl: './my-gallery.html',
  styleUrls: ['./my-gallery.css']
})
export class MyGallery implements OnInit {
  favoriteImages: string[] = [];

  ngOnInit() {
    
    const storedFavs = localStorage.getItem('myFavorites');
    this.favoriteImages = storedFavs ? JSON.parse(storedFavs) : [];
  }

  
  removeFavorite(img: string) {
    this.favoriteImages = this.favoriteImages.filter(item => item !== img);
    localStorage.setItem('myFavorites', JSON.stringify(this.favoriteImages));
  }
}