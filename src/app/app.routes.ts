import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LayoutComponent } from '../pages/layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { StudentcrudComponent } from '../pages/studentcrud/studentcrud.component';
import { authguardGuard } from '../guard/auth.guard';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    }
    ,{
        path:'registration',
        component:RegistrationComponent
    }
    ,
    {
        path:'layout',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate:[authguardGuard]
            }
            
            ,{
                path:'crud',
                component:StudentcrudComponent,
                canActivate:[authguardGuard]
            }
        ]
    },
    { path: '', component: HomeComponent }, 
    { path: '**', redirectTo: '', pathMatch: 'full' } 
   
];
