import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ToastrNotification, NotificationType } from './../model/ToastrNotification';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  clear() {
    this.subject.next();
  }
 
public subject=new Subject<ToastrNotification>();
public keepAfterRouteChange=true;

  constructor(public router:Router) { 
    router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        if(this.keepAfterRouteChange){
          this.keepAfterRouteChange=false;
        }
        else{
          this.clear();
        }
      }
    });
  }
  showNotification(type:NotificationType,message:string,keepAfterRouteChange=false){
    this.keepAfterRouteChange=keepAfterRouteChange;
    this.subject.next(<ToastrNotification>{type:type,message:message});
  }
  getAlert():Observable<any>{
    return this.subject.asObservable();
  }
  success(message:string,keepAfterRouteChange=false){
    debugger;
    this.showNotification(NotificationType.Success,message,keepAfterRouteChange);
  }
  error(message:string,keepAfterRouteChange=false){
    this.showNotification(NotificationType.Error,message,keepAfterRouteChange);
  }
  warn(message:string,keepAfterRouteChange=false){
    this.showNotification(NotificationType.Warning,message,keepAfterRouteChange);
  }
  
}
