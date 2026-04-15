import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './aot.html',
  styleUrl: './aot.css'
})
export class Aot {
  title = "Attack on Titan";
  images = [
    "./images/aot/1.jpg", 
    "./images/aot/2.jpg", 
    "./images/aot/3.jpg",
    "./images/aot/4.jpg",
    "./images/aot/5.jpg",
    "./images/aot/6.jpg",
    "./images/aot/7.jpg",
    "./images/aot/8.jpg",
    "./images/aot/9.jpg",
    "./images/aot/10.jpg"
  ];

  selectedImage: string | null = null;

  openLightbox(img: string) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}