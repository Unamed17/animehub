import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.html',
  styleUrl: './terms.css'
})
export class Terms {

  constructor(
    private router: Router, 
    private location: Location
  ) {}


  goBack() {
    this.router.navigate(['/register']);
  }

  goPrevious() {
    this.location.back();
  }
}