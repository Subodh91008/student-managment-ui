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

  onLogin(loginUser: LoginUser) {
    this.loginservice.userLogin(loginUser).subscribe({
      next: (result: any) => {
        // Store token in localStorage
        localStorage.setItem('token', result.jwt);
  
        // Show success message
        this.showSuccessMessage();
  
        // Navigate to layout page after a short delay
        setTimeout(() => {
          this.router.navigateByUrl('layout');
        }, 2000);
      },
      error: (error) => {
        
        // Remove token if login fails
        localStorage.removeItem('token');
  
        // Extract meaningful error message
        let errorMessage = 'Something went wrong! Check username or password.';
       
        if (error.error && error.error.message) {
         
          errorMessage = error.error.message;
        } else if (error.status) {
          errorMessage = `Error ${error.status}: ${error.statusText}`;
         
        }
       
        alert(errorMessage);
        console.error('Error while login:', error);
        this.showErrorMessage();
        
      },
      complete: () => {
        console.log('Login request completed.');
      }
    });
  }
  
 register(){
this.router.navigateByUrl('registration');
 }

 showSuccessMessage() {
  const successDiv = document.createElement('div');
  successDiv.innerText = '🎉 You are successfully logged in!';
  successDiv.style.position = 'fixed';
  successDiv.style.top = '50%';
  successDiv.style.left = '50%';
  successDiv.style.transform = 'translate(-50%, -50%)';
  successDiv.style.background = 'rgba(0, 128, 0, 0.8)';
  successDiv.style.color = '#fff';
  successDiv.style.padding = '15px 30px';
  successDiv.style.borderRadius = '10px';
  successDiv.style.fontSize = '18px';
  successDiv.style.zIndex = '1000';
  successDiv.style.textAlign = 'center';

  document.body.appendChild(successDiv);

  // Remove message after 2 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 2000);
}


showErrorMessage() {
  const successDiv = document.createElement('div');
  successDiv.innerText = '🎉 Email or Password are incorrect';
  successDiv.style.position = 'fixed';
  successDiv.style.top = '50%';
  successDiv.style.left = '50%';
  successDiv.style.transform = 'translate(-50%, -50%)';
  successDiv.style.background = 'rgb(253, 1, 1)';
  successDiv.style.color = '#fff';
  successDiv.style.padding = '15px 30px';
  successDiv.style.borderRadius = '10px';
  successDiv.style.fontSize = '18px';
  successDiv.style.zIndex = '1000';
  successDiv.style.textAlign = 'center';

  document.body.appendChild(successDiv);

  // Remove message after 2 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 2000);
}


}
