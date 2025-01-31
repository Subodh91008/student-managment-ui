import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  imports: [FormsModule],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {
  student = {
    name: '',
    rollNumber: '',
    email: '',
    subject: '',
    address: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Save the student data (you can add logic to send data to a backend API)
    console.log('Student added:', this.student);

    // Navigate back to the student table
    this.router.navigate(['/']);
  }
}
