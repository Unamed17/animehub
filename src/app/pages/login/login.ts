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
    // 1. Define your GIVEN/STATIC credentials
    const staticEmail = '@animehub';
    const staticPassword = '12345';

    // 2. Also check the browser's "notebook" for any signed-up users
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

    // 3. Logic: Match STATIC credits OR matches REGISTERED credits
    if ((this.loginEmail === staticEmail && this.loginPassword === staticPassword) || 
        (this.loginEmail === savedEmail && this.loginPassword === savedPassword)) {
      
      // Save the session so the back button and gallery work
      localStorage.setItem('savedEmail', this.loginEmail);
      
      this.errorMessage = '';
      alert("Login Successful!");
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid credentials. Use admin@gmail.com / 12345';
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}