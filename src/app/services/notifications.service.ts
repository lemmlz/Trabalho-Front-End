import { Injectable } from '@angular/core';
import { NotificationComputers } from '../model/notification.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  listReport : NotificationComputers[] = [];

  constructor(private http : HttpClient) {
    this.getListReport();
   }

  protected getUrlReport() : string{
    return environment.REQUEST_URL + 'report/'
  }

  getListReport(){
    this.http.get<NotificationComputers[]>(this.getUrlReport()).subscribe(
      list => {
        this.listReport = list;
      }
    );
  }

  addReport(objReport : NotificationComputers){
    this.http.post<NotificationComputers>(this.getUrlReport(), objReport).subscribe(
      res => {
        this.getListReport();
      }
    );
  }

  updateReport(objReport : NotificationComputers){
    this.http.put<NotificationComputers>(this.getUrlReport() + objReport.id, objReport).subscribe(
      res => {
        this.getListReport();
      }
    );
  }

  deleteReport(id : number){
    this.http.delete<NotificationComputers>(this.getUrlReport() + id).subscribe(
      res => {
        this.getListReport();
      }
    );
  }
}
