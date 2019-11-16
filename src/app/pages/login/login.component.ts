import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { Person } from 'src/app/model/person.module';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objPerson : Person = new Person();

  //Validation
  validationUser:boolean = true;
  validationPassword:boolean = true;

  //FocusTextBox
  isFocusUser:boolean = false;
  isFocusPassword:boolean = false;

  constructor(private screenService : ScreenService, private personService : PersonService, private router : Router) {
    screenService.changeScreenLogin();
   }

  //Validation functions
  focusUser(){
    this.isFocusUser = true;
    this.validationUser = true;
    this.validationPassword = true;
  }

  blurUser(value:string){
    if(value === undefined || value === '')
      this.isFocusUser = false;
  }

  focusPassword(){
    this.isFocusPassword = true;
    this.validationUser = true;
    this.validationPassword = true;
  }

  blurPassword(value:string){
    if(value === undefined || value === '')
      this.isFocusPassword = false;
  }

  onSubmit(){
    this.personService.getListPerson().subscribe(
      listPerson => {
        for (let person of listPerson) {
          if (person.user === this.objPerson.user && person.password === this.objPerson.password) {
              localStorage['token'] = 'xptoh26410x5=50';
              localStorage['login'] = person.user;
              this.router.navigate(['/']);
              return;
          }
        }
        this.validationUser = false;
        this.validationPassword = false;
      }
    );
  }

  ngOnInit() {
  }

}
