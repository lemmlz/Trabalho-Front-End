import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public person : Person = new Person;

  constructor(private http : HttpClient) {
    this.setPerson();
   }

  protected getUrl() : string {
    return environment.REQUEST_URL + 'person/';
  }

  protected setPerson(){
    this.getListPerson().subscribe(
      listPerson => {
        for (let p of listPerson) {
          if (p.user == localStorage['login']) {
             this.person = p;
            return;
          }
        }
      }
    );
  }

  getListPerson() : Observable<Person[]>{
    return this.http.get<Person[]>(this.getUrl());
  }

  addPerson(objPerson : Person) {
    this.http.post<Person>(this.getUrl(), objPerson).subscribe();
  }

  updatePerson(objPerson : Person) {
    this.http.put<Person>(this.getUrl() + objPerson.id , objPerson).subscribe(
      answer => {
        this.person = objPerson
      }
    );
  }

}
