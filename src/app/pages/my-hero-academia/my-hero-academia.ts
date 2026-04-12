import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-hero-academia',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './my-hero-academia.html',
  styleUrl: './my-hero-academia.css',
})
export class MyHeroAcademia {

  title = "My Hero Academia";
  images = [
    "./images/MHA/1.jpg", 
    "./images/MHA/2.jpg", 
    "./images/MHA/3.jpg",
    "./images/MHA/4.jpg",
    "./images/MHA/5.jpg",
    "./images/MHA/6.jpg",
    "./images/MHA/7.jpg",
    "./images/MHA/8.jpg",
    "./images/MHA/9.jpg",
    "./images/MHA/10.jpg"
  ];

  // 1. Add this variable to track the clicked image
  selectedImage: string | null = null;

  // 2. Add these functions to open and close it
  openLightbox(img: string) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}

