import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginUser } from '../../classes/LoginUser';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: LoginUser = {
    email: '',
    password: ''
  };
  

constructor(private router:Router,private loginservice:LoginService){}
  ngOnInit(): void {
    localStorage.clear()
  }


  isNavbarActive = false;

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  onlogin(loginUser:LoginUser){
    debugger
    this.loginservice.userLogin(loginUser).subscribe({
      
      next:(result:any)=>{
      
         console.log(result.jwt)
        localStorage.setItem("token",result.jwt);
        console.log(localStorage.getItem);
        this.router.navigateByUrl('layout');
      },error:(error)=>{
        localStorage.removeItem('token')
        alert("something went wrong!!!! check username or password");
        console.log("error while login",error);
      },complete:()=>{
        console.log("succesfully login");
      }
    })
  }
 register(){
this.router.navigateByUrl('registration');
 }
}
