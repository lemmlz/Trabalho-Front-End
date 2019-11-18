import { Injectable } from '@angular/core';
import { NotificationComputers } from '../model/notification.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
}
