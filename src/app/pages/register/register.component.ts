import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { Course } from 'src/app/model/course.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  teste: Course[] = [
    {id: 1, name: "teste"},
    {id: 2, name: "asd"}
  ];
  //Validation
  validationName:boolean = false;
  validationCourse:boolean = false;
  validationUser:boolean = false;
  validationPassword:boolean = false;
  validationConfirmPassword:boolean = false;
  validationRegister:boolean = false;

  //FocusTextBox
  isFocusName:boolean = false;
  isFocusCourse:boolean = false;
  isFocusUser:boolean = false;
  isFocusPassword:boolean = false;
  isFocusConfirmPassword:boolean = false;



  focusName(value:string){
    this.isFocusName = true;
    if(value != ''){
      this.validationName = false;
    } else {
      if(this.validationRegister)
        this.validationName = true;
    }
  }

  blurName(value:string){
    if(value === '')
      this.isFocusName = false;
  }

  focusCourse(){
    this.isFocusCourse = true;
  }

  blurCourse(value:string){
    console.log(value);
    
    if (value === 'default')
      this.isFocusCourse = false;
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
    this.validationName = true;
    this.validationCourse = true;
    this.validationUser = true;
    this.validationPassword = true;
    this.validationConfirmPassword = true;
  }

  constructor( private screenService : ScreenService) {
    screenService.changeScreenLogin();
   }

  ngOnInit() {
  }

}
