import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Validation
  validationUser:boolean = false;
  validationPassword:boolean = false;
  validationLogin:boolean = false;

  //FocusTextBox
  isFocusUser:boolean = false;
  isFocusPassword:boolean = false;

  //Validation functions
  focusUser(value:string){
    this.isFocusUser = true;
    if(value != ''){
      this.validationUser = false;
    } else {
      if(this.validationLogin)
        this.validationUser = true;
    }
  }

  focusStopUser(value:string){
    if(value === '')
      this.isFocusUser = false;
  }

  focusPassword(value:string){
    this.isFocusPassword = true;
    if(value != ''){
      this.validationPassword = false;
    } else {
      if(this.validationLogin)
        this.validationPassword = true;
    }
  }

  focusStopPassword(value:string){
    if(value === '')
      this.isFocusPassword = false;
  }

  dataValidation(){
    this.validationLogin = true;
    this.validationUser = true;
    this.validationPassword = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
