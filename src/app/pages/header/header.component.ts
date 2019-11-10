import { Component, OnInit } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { NotificationComputers } from '../../model/notification.module';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDropdownActive:boolean = false;

  items : NotificationComputers[] = this.notificationsService.getNotifications;

  changeStatusDropdown(){
    this.isDropdownActive = !this.isDropdownActive;
  }

  logOff(){
    localStorage.removeItem('token');
  }

  constructor(private sidebarLeftService : SidebarLeftService, private notificationsService : NotificationsService, private router : Router) { }

  ngOnInit() {
  }

}
