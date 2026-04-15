import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

  goContact() {
    this.router.navigate(['/contact']);
  }
}