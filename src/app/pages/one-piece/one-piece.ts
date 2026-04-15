import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-piece',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './one-piece.html',
  styleUrl: './one-piece.css',
})
export class OnePiece {

  title = "One Piece";
  images = [
    "./images/One piece/1.jpg", 
    "./images/One piece/2.jpg", 
    "./images/One piece/3.jpg",
    "./images/One piece/4.jpg",
    "./images/One piece/5.jpg",
    "./images/One piece/6.jpg",
    "./images/One piece/7.jpg",
    "./images/One piece/8.jpg",
    "./images/One piece/9.jpg",
    "./images/One piece/10.jpg",
    "./images/One piece/11.jpg"
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

