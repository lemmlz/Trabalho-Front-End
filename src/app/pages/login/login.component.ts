import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { Person } from 'src/app/model/person.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objPerson : Person = new Person();

  //Validation
  validationUser:boolean = false;
  validationPassword:boolean = false;
  validationLogin:boolean = false;

  //FocusTextBox
  isFocusUser:boolean = false;
  isFocusPassword:boolean = false;

  //Validation functions
  focusUser(){
    this.isFocusUser = true;
  }

  blurUser(value:string){
    if(value === undefined || value === '')
      this.isFocusUser = false;
  }

  focusPassword(){
    this.isFocusPassword = true;
  }

  blurPassword(value:string){
    if(value === undefined || value === '')
      this.isFocusPassword = false;
  }

  onSubmit(){
  }

  constructor( private screenService : ScreenService ) {
    screenService.changeScreenLogin();
   }

  ngOnInit() {
  }

}
