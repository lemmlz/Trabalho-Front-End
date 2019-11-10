import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person.module';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http : HttpClient) { }

  protected getUrl() : string {
    return environment.REQUEST_URL + 'person';
  }

  getListPerson() : Observable<Person[]>{
    return this.http.get<Person[]>(this.getUrl());
  }

  addPerson(objPerson : Person) {
      this.http.post<Person>(this.getUrl(), objPerson).subscribe();
  }

  updatePerson(objPerson : Person) {
    this.http.put<Person>(this.getUrl(), objPerson).subscribe();
  }

}
