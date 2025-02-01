import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
debugger
  const mytoken=localStorage.getItem('token');
  if(mytoken!=null){
    const clonereq=req.clone({
      setHeaders:{
        authorization:`Bearer ${mytoken}`
      }
    });
  
    return next(clonereq);
  }
  else{
    return next(req);
  }
  
};