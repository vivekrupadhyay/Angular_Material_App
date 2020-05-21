import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ToastrNotification, NotificationType } from 'src/app/model/ToastrNotification';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  notifications: ToastrNotification[] = []; 
  constructor( public notificationService:AlertService) { }

  ngOnInit() {
    this.notificationService.getAlert().subscribe((alert: ToastrNotification) => {  
      this.notifications = [];  
      if (!alert) {  
          this.notifications = [];  
          return;  
      }  
      this.notifications.push(alert);  
      setTimeout(() => {  
          this.notifications = this.notifications.filter(x => x !== alert);  
      }, 8000);  
  });
  }
  removeNotification(notification: ToastrNotification) {  
    this.notifications = this.notifications.filter(x => x !== notification);  
} 
cssClass(notification: ToastrNotification) {  
        
  if (!notification) {  
      return;  
  }  
  switch (notification.type) {  
      case NotificationType.Success:  
          return 'toast-success';  
      case NotificationType.Error:  
          return 'toast-error';  
      case NotificationType.Info:  
          return 'toast-info';  
      case NotificationType.Warning:  
          return 'toast-warning';  
  }  
}

}
