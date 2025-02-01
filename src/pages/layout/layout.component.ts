import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { faBars, faHome, faUsers, faChalkboardTeacher, faBook, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigateByUrl('layout/dashboard')
  }
  isSidebarActive: boolean = false;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  logout(){
    if (confirm('Are you sure you want to Logout?')){
      this.router.navigateByUrl('');
    }
  }
}
