import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hunter-x-hunter',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hunter-x-hunter.html',
  styleUrl: './hunter-x-hunter.css',
})
export class HunterXHunter {

  title = "Hunter x Hunter";
  images = [
    "./images/hunter-x-hunter/1.jpg", 
    "./images/hunter-x-hunter/2.jpg", 
    "./images/hunter-x-hunter/3.jpg",
    "./images/hunter-x-hunter/4.jpg",
    "./images/hunter-x-hunter/5.jpg",
    "./images/hunter-x-hunter/6.jpg",
    "./images/hunter-x-hunter/7.jpg",
    "./images/hunter-x-hunter/8.jpg",
    "./images/hunter-x-hunter/9.jpg",
    "./images/hunter-x-hunter/10.jpg"
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

