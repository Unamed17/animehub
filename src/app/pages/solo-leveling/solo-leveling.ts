import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solo-leveling',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './solo-leveling.html',
  styleUrl: './solo-leveling.css',
})
export class SoloLeveling {

  title = "Solo Leveling";
  images = [
    "./images/Solo Leveling/1.jpg", 
    "./images/Solo Leveling/2.jpg", 
    "./images/Solo Leveling/3.jpg",
    "./images/Solo Leveling/4.jpg",
    "./images/Solo Leveling/5.jpg",
    "./images/Solo Leveling/6.jpg",
    "./images/Solo Leveling/7.jpg",
    "./images/Solo Leveling/8.jpg",
    "./images/Solo Leveling/9.jpg",
    "./images/Solo Leveling/10.jpg",
    "./images/Solo Leveling/11.jpg",
    "./images/Solo Leveling/12.jpg",
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

