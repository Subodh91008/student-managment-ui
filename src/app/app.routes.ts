import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LayoutComponent } from '../pages/layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { StudentcrudComponent } from '../pages/studentcrud/studentcrud.component';

export const routes: Routes = [
    {path:'',
        component:HomeComponent,
        
    },{
        path:'layout',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'login',
                component:LoginComponent
            }
            ,{
                path:'registration',
                component:RegistrationComponent
            },{
                path:'crud',
                component:StudentcrudComponent
            }
        ]
    }
];
