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
}

