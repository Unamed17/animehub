import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-naruto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './naruto.html',
  styleUrl: './naruto.css',
})
export class Naruto {

  title = "Naruto";
  images = [
    "./images/Naruto/1.jpg", 
    "./images/Naruto/2.jpg", 
    "./images/Naruto/3.jpg",
    "./images/Naruto/4.jpg",
    "./images/Naruto/5.jpg",
    "./images/Naruto/6.jpg",
    "./images/Naruto/7.jpg",
    "./images/Naruto/8.jpg",
    "./images/Naruto/9.jpg",
    "./images/Naruto/10.jpg"
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

