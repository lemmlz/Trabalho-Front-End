import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Validation
  validationRA:boolean = false;
  validationUser:boolean = false;
  validationPassword:boolean = false;
  validationConfirmPassword:boolean = false;
  validationRegister:boolean = false;

  //FocusTextBox
  isFocusRA:boolean = false;
  isFocusUser:boolean = false;
  isFocusPassword:boolean = false;
  isFocusConfirmPassword:boolean = false;

  focusRA(value:string){
    this.isFocusRA = true;
    if(value != ''){
      this.validationRA = false;
    } else {
      if(this.validationRegister)
        this.validationRA = true;
    }
  }

  blurRA(value:string){
    if(value === '')
      this.isFocusRA = false;
  }

  focusUser(value:string){
    this.isFocusUser = true;
    if(value != ''){
      this.validationUser = false;
    } else {
      if(this.validationRegister)
        this.validationUser = true;
    }
  }

  blurUser(value:string){
    if(value === '')
      this.isFocusUser = false;
  }

  focusPassword(value:string){
    this.isFocusPassword = true;
    if(value != ''){
      this.validationPassword = false;
    } else {
      if(this.validationRegister)
        this.validationPassword = true;
    }
  }

  blurPassword(value:string){
    if(value === '')
      this.isFocusPassword = false;
  }
  
  focusConfirmPassword(value:string){
    this.isFocusConfirmPassword = true;
    if(value != ''){
      this.validationConfirmPassword = false;
    } else {
      if(this.validationRegister)
        this.validationConfirmPassword = true;
    }
  }

  blurConfirmPassword(value:string){
    if(value === '')
      this.isFocusConfirmPassword = false;
  }

  dataValidation(){
    this.validationRegister = true;
    this.validationRA = true;
    this.validationUser = true;
    this.validationPassword = true;
    this.validationConfirmPassword = true;
  }

  constructor( private screenService : ScreenService ) {
    screenService.changeScreenLogin();
   }

  ngOnInit() {
  }

}
