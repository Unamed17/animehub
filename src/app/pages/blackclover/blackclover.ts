import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blackclover',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blackclover.html',
  styleUrl: './blackclover.css',
})
export class Blackclover {

  title = "Black Clover";
  images = [
    "./images/blackclover/1.jpg", 
    "./images/blackclover/2.jpg", 
    "./images/blackclover/3.jpg",
    "./images/blackclover/4.jpg",
    "./images/blackclover/5.jpg",
    "./images/blackclover/6.jpg",
    "./images/blackclover/7.jpg",
    "./images/blackclover/8.jpg",
    "./images/blackclover/9.jpg",
    "./images/blackclover/10.jpg"
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


