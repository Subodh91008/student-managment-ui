import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faPlus, faSave, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { StudentMangementService } from '../../service/student-mangament/student-mangement.service';
import { Student } from '../../classes/student';


@Component({
  selector: 'app-studentcrud',
  imports: [CommonModule,FormsModule,FontAwesomeModule],
  templateUrl: './studentcrud.component.html',
  styleUrl: './studentcrud.component.css'
})
export class StudentcrudComponent implements OnInit {

  
  students: Student[] = [];

  selectedStudent: Student = { sid: 0, name: '', email: '',rollnumber:'', subject:'',address:'',phone:''};
  isEditMode: boolean = false;

  // Font Awesome Icons
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  faSave = faSave;
  faTimes = faTimes;

  constructor(private modalService: NgbModal, private service:StudentMangementService) {}
  ngOnInit(): void {
   this.getAllStudent();
  }

  openAddStudentModal(content: any) {
    this.isEditMode = false;
    this.selectedStudent = { sid: 0, name: '', email: '',rollnumber:'', subject:'',address:'',phone:'' };
    this.modalService.open(content, { ariaLabelledBy: 'studentModalLabel', size: 'lg', centered: true });
  }

  openEditStudentModal(content: any, student: Student) {
    this.isEditMode = true;
    this.selectedStudent = { ...student }; // Clone the object to avoid changes before save
    this.modalService.open(content, { ariaLabelledBy: 'studentModalLabel', size: 'lg', centered: true });
  }

  saveStudent(request:Student) {
    if (this.isEditMode) {
      debugger
      this.service.updateStudent(request).subscribe({
        next:(response:string)=>{
          alert(response);
          this.getAllStudent();
       }
     
      })
    } else {
      this.service.saveStudent(request).subscribe({
        next:(response:string)=>{
           alert(response);
           this.getAllStudent();
        }
      })
    }
    this.modalService.dismissAll(); // Close modal
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
     this.service.deleteStudent(id).subscribe({

      next:(response)=>{
        alert(response);
        this.getAllStudent();
      }
     })
    }
  }
  getAllStudent(){
    this.service.getAllStudent().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.students=response;
      },error:(error)=>{
        alert('something went wrong');
        console.log('error while fetching record in db',error);
      }
    });
  }
}
