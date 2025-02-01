import { Component, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../service/login.service';
import { SignupRequest } from '../../classes/sinup-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  signupRequest: SignupRequest = {
    firstName: '',
    lastName: '',
    phone: '',
    gender: '',
    email: '',
    password: ''
};

  constructor(private fb: FormBuilder,private service:LoginService,private router:Router) {}

  ngOnInit(): void {
    // Initialize the form in ngOnInit
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      console.log('Form is invalid');
      return;
    }
  
    console.log('Form Submitted:', this.registrationForm.value);
  
    this.service.signup(this.signupRequest).subscribe({
      next: (result) => {
        alert('Successfully signed up');
        this.router.navigateByUrl('login');
      },
      error: (error) => {
        console.error('Error during registration:', error);
  
        // Default error message
        let errorMessage = 'Something went wrong. Please try again.';
  
        // Safely extract API error message
        if (error.error && typeof error.error === 'object' && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.status) {
          errorMessage = `Error ${error.status}: ${error.statusText}`;
        }
  
        alert(errorMessage);
      }
    });
  }
  
  
  
}
  