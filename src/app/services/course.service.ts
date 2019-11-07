import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  protected getUrl() : string {
    return environment.REQUEST_URL + 'course';
  }

  getListCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.getUrl());
  };
}
