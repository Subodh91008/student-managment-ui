import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faPlus, faSave, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Student {
  id: number;
  name: string;
  email: string;
  rollNumber:string;
  subject:string;
  address:string
}

@Component({
  selector: 'app-studentcrud',
  imports: [CommonModule,FormsModule,FontAwesomeModule],
  templateUrl: './studentcrud.component.html',
  styleUrl: './studentcrud.component.css'
})
export class StudentcrudComponent {

  
  students: Student[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com',rollNumber:'101', subject:'java',address:'gokulpur'},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com',rollNumber:'102', subject:'boot',address:'purnia' }
  ];

  selectedStudent: Student = { id: 0, name: '', email: '',rollNumber:'', subject:'',address:'' };
  isEditMode: boolean = false;

  // Font Awesome Icons
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  faSave = faSave;
  faTimes = faTimes;

  constructor(private modalService: NgbModal) {}

  openAddStudentModal(content: any) {
    this.isEditMode = false;
    this.selectedStudent = { id: 0, name: '', email: '',rollNumber:'', subject:'',address:'' };
    this.modalService.open(content, { ariaLabelledBy: 'studentModalLabel', size: 'lg', centered: true });
  }

  openEditStudentModal(content: any, student: Student) {
    this.isEditMode = true;
    this.selectedStudent = { ...student }; // Clone the object to avoid changes before save
    this.modalService.open(content, { ariaLabelledBy: 'studentModalLabel', size: 'lg', centered: true });
  }

  saveStudent() {
    if (this.isEditMode) {
      const index = this.students.findIndex(s => s.id === this.selectedStudent.id);
      if (index !== -1) {
        this.students[index] = { ...this.selectedStudent };
      }
    } else {
      const newStudent = { ...this.selectedStudent, id: this.students.length + 1 };
      this.students.push(newStudent);
    }
    this.modalService.dismissAll(); // Close modal
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.students = this.students.filter(student => student.id !== id);
    }
  }
}
