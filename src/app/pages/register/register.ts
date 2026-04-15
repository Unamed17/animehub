import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule, FormsModule], 
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  userName = '';
  userEmail = '';
  userPassword = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private router: Router, private location: Location) {}

  onRegister() {
    if (!this.userName || !this.userEmail || !this.userPassword || !this.confirmPassword) {
      this.errorMessage = "Please fill out all fields.";
      
      return;
    }

    if (this.userPassword !== this.confirmPassword) {
      this.errorMessage = "Passwords do not match!";
      return;
    }

 
    localStorage.setItem('savedUsername', this.userName); 
    localStorage.setItem('savedEmail', this.userEmail);
    localStorage.setItem('savedPassword', this.userPassword);
    
    this.errorMessage = '';
    alert("Registration Successful! Your account is now saved.");
    this.router.navigate(['/login']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}