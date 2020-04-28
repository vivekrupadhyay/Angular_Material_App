import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerServiceService implements ErrorHandler {

constructor(private injector:Injector) { }
handleError(error:any){
  const router=this.injector.get(Router);
  const ngZone=this.injector.get(NgZone);
  if(error instanceof HttpErrorResponse){
    console.error('Backend returned status code: ',error.status);
    console.error('Response Body: ',error.message);
  }else{
    console.error('An Error Occured: ',error.message);
    
  }
}

}
