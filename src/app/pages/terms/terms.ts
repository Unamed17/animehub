import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.html',
  styleUrl: './terms.css'
})
export class TermsComponent {

  // Inject the Router in the constructor
  constructor(private router: Router) {}

  // Define the goBack function
  goBack() {
    this.router.navigate(['/register']); // This takes the user back to your register page
  }
}