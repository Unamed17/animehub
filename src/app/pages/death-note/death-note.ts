import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-death-note',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './death-note.html',
  styleUrl: './death-note.css'
})
export class DeathNote {
  title = "Death Note";
  images = [
    "./images/Death note/1.jpg", 
    "./images/Death note/2.jpg", 
    "./images/Death note/3.jpg",
    "./images/Death note/4.jpg",
    "./images/Death note/5.jpg",
    "./images/Death note/6.jpg",
    "./images/Death note/7.jpg",
    "./images/Death note/8.jpg",
    "./images/Death note/9.jpg",
    "./images/Death note/10.jpg"
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