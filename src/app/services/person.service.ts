import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http : HttpClient) { }

  protected getUrl() : string {
    return environment.REQUEST_URL + 'person/';
  }

  getListPerson() : Observable<Person[]>{
    return this.http.get<Person[]>(this.getUrl());
  }

  addPerson(objPerson : Person) {
      this.http.post<Person>(this.getUrl(), objPerson).subscribe();
  }

  updatePerson(objPerson : Person) {
    this.http.put<Person>(this.getUrl() + objPerson.id , objPerson).subscribe();
  }

}
