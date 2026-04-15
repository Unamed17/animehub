import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jjk',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './jjk.html',
  styleUrl: './jjk.css',
})
export class Jjk {

  title = "Jujutsu Kaisen";
  images = [
    "./images/Jjk/1.jpg", 
    "./images/Jjk/2.jpg", 
    "./images/Jjk/3.jpg",
    "./images/Jjk/4.jpg",
    "./images/Jjk/5.jpg",
    "./images/Jjk/6.jpg",
    "./images/Jjk/7.jpg",
    "./images/Jjk/8.jpg",
    "./images/Jjk/9.jpg",
    "./images/Jjk/10.jpg"
  ];

  selectedImage: string | null = null;

  openLightbox(img: string) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }

  favorites: string[] = [];

ngOnInit() {
  
  const saved = localStorage.getItem('myFavorites');
  this.favorites = saved ? JSON.parse(saved) : [];
}

toggleFavorite(img: string) {
  const index = this.favorites.indexOf(img);
  if (index > -1) {
    this.favorites.splice(index, 1);
  } else {
    this.favorites.push(img);
  }
  
  localStorage.setItem('myFavorites', JSON.stringify(this.favorites));
}

isFavorite(img: string): boolean {
  return this.favorites.includes(img);
}
}

