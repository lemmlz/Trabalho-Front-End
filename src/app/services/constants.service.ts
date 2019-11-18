import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laboratory } from '../model/laboratory.module';
import { College } from '../model/college.module';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor(private http: HttpClient) { }

  protected getUrlCourse() : string {
    return environment.REQUEST_URL + 'course/';
  }

  protected getUrlLab() : string {
    return environment.REQUEST_URL + 'laboratory/';
  }

  protected getUrlCollege() : string {
    return environment.REQUEST_URL + 'college/';
  }

  protected getUrlComputer() : string {
    return environment.REQUEST_URL + 'computer/';
  }

  getListCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.getUrlCourse());
  };

  getListLaboratory(): Observable<Laboratory[]>{
    return this.http.get<Laboratory[]>(this.getUrlLab());
  };

  getListCollege(): Observable<College[]>{
    return this.http.get<College[]>(this.getUrlCollege());
  };

  getListComputer(): Observable<string[]>{
    return this.http.get<string[]>(this.getUrlComputer());
  };
}
