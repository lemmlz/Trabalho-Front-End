import { Component, OnInit } from '@angular/core';
import { NotificationComputers } from './notification.module';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { NotificationsService } from 'src/app/services/notifications.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: NotificationComputers[] = this.notificationsService.getNotifications;

  constructor( private sidebarLeftService : SidebarLeftService, private notificationsService : NotificationsService) { }

  ngOnInit() {
  }

}
