import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bleach',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './bleach.html',
  styleUrl: './bleach.css'
})
export class Bleach {
  title = "Bleach";
  images = [
    "./images/bleach/1.jpg", 
    "./images/bleach/2.jpg", 
    "./images/bleach/3.jpg",
    "./images/bleach/4.jpg",
    "./images/bleach/5.jpg",
    "./images/bleach/6.jpg",
    "./images/bleach/7.jpg",
    "./images/bleach/8.jpg",
    "./images/bleach/9.jpg",
    "./images/bleach/10.jpg"
  ];

  selectedImage: string | null = null;


  openLightbox(img: string) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}