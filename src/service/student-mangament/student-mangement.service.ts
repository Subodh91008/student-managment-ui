import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../classes/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentMangementService {
  //baseurl="http://localhost:8080";
  baseurl="https://login-registration-0dc9bd014206.herokuapp.com";
  constructor(private http:HttpClient) { }

 getAllStudent(){
   return this.http.get<Student[]>(`${this.baseurl}/api/allstudent`);
 }
 saveStudent(student: Student): Observable<string> {
  return this.http.post(`${this.baseurl}/api/saveStudent`, student, { responseType: 'text' });
}

updateStudent(student: Student){
  return this.http.put(`${this.baseurl}/api/updateStudent`, student, { responseType: 'text' });
}

deleteStudent(id: number) {
  return this.http.delete(`${this.baseurl}/api/delete/${id}`,{ responseType: 'text' as 'json' });
}
}
