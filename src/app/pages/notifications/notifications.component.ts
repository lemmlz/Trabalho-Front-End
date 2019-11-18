import { Component, OnInit } from '@angular/core';
import { NotificationComputers } from '../../model/notification.module';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { NotificationsService } from 'src/app/services/notifications.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: NotificationComputers[] = [];

  constructor( private sidebarLeftService : SidebarLeftService, private notificationsService : NotificationsService) { }

  changeStatus(id : number){
    for(let objReport of this.notifications){
      if (id === objReport.id) {
        objReport.status = true;
        this.notificationsService.updateReport(objReport);
      }
    }
  }

  deleteReport(id : number){
    this.notificationsService.deleteReport(id);
    this.notificationsService.getListReport().subscribe(
      listReport => {
        this.notifications = listReport;
      }
    );
  }

  ngOnInit() {
    this.notificationsService.getListReport().subscribe(
      listReport => {
        this.notifications = listReport;
      }
    )
  }

}
