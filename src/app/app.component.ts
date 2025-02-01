import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { HomeComponent } from '../pages/home/home.component';
import { LayoutComponent } from "../pages/layout/layout.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    localStorage.clear();
  }
 
}
