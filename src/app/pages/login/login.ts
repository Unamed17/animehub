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
    const staticEmail = '@animehub';
    const staticPassword = '12345';

    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');


    if ((this.loginEmail === staticEmail && this.loginPassword === staticPassword) || 
        (this.loginEmail === savedEmail && this.loginPassword === savedPassword)) {
      

      localStorage.setItem('savedEmail', this.loginEmail);
      
      this.errorMessage = '';
      alert("Login Successful!");
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid credentials. Use @animehub / 12345';
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}