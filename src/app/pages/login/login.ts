import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginEmail = '';
  loginPassword = '';
  errorMessage = ''; 

  constructor(private router: Router) {}

  onLogin() {
    // This looks for the labels we just fixed in the register file
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

    if (this.loginEmail === savedEmail && this.loginPassword === savedPassword) {
      this.errorMessage = '';
      this.router.navigate(['/home']); 
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}