import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  // Inject both Location (for back button) and Router (for home button)
  constructor(private location: Location, private router: Router) {}

  // 1. Logic for the Back button
  goBack() {
    this.location.back();
  }

  // 2. Logic for the Logo/Brand click
  goHome() {
    this.router.navigate(['/']);
  }

  // 3. Logic for the Form Submission
  onSubmit(event: Event) {
    event.preventDefault(); // Prevents the page from refreshing
    alert("Message sent! We will get back to you soon.");
    this.goHome(); // Sends them back to the landing page after sending
  }
}