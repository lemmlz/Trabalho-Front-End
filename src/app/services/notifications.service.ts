import { Injectable } from '@angular/core';
import { NotificationComputers } from '../model/notification.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http : HttpClient) { }

  protected getUrlReport() : string{
    return environment.REQUEST_URL + 'report/'
  }

  getListReport() : Observable<NotificationComputers[]>{
    return this.http.get<NotificationComputers[]>(this.getUrlReport());
  }

  addReport(objReport : NotificationComputers){
    this.http.post<NotificationComputers>(this.getUrlReport(), objReport).subscribe();
  }

  updateReport(objReport : NotificationComputers){
    this.http.put<NotificationComputers>(this.getUrlReport() + objReport.id, objReport).subscribe();
  }

  deleteReport(id : number){
    this.http.delete<NotificationComputers>(this.getUrlReport() + id).subscribe();
  }
}
