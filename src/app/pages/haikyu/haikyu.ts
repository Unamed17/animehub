import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-haikyu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './haikyu.html',
  styleUrl: './haikyu.css',
})
export class Haikyu {

  title = "Haikyu";
  images = [
    "./images/haikyu/1.jpg", 
    "./images/haikyu/2.jpg", 
    "./images/haikyu/3.jpg",
    "./images/haikyu/4.jpg",
    "./images/haikyu/5.jpg",
    "./images/haikyu/6.jpg",
    "./images/haikyu/7.jpg",
    "./images/haikyu/8.jpg",
    "./images/haikyu/9.jpg",
    "./images/haikyu/10.jpg"
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

