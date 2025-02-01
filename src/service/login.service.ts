import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../classes/LoginUser';
import { Student } from '../classes/student';
import { SignupRequest } from '../classes/sinup-request';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl="https://login-registration-0dc9bd014206.herokuapp.com";
 // baseurl="http://localhost:8080";

  constructor(private http:HttpClient) { }

userLogin(loginUser:LoginUser){
  return this.http.post(`${this.baseurl}/login`,loginUser);
}
getmessage(){
 return this.http.get<string>(`${this.baseurl}/api/hello`,{ responseType: 'text' as 'json' });
}

signup(signupRequest: SignupRequest) {
  return this.http.post(`${this.baseurl}/signup`, signupRequest);
}
}