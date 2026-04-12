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

