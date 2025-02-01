import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  debugger
  const router=inject(Router);
  const token=localStorage.getItem('token');
  if(token!=null){
    return true;
  }else{
    router.navigateByUrl('home');
    return false;
  }
  
};