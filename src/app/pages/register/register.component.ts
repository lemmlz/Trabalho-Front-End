import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/model/course.module';
import { Person } from 'src/app/model/person.module';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  listCourse: Course[];

  objPerson : Person = new Person();
  validPasswordValue : string;

  //Validation
  validationPassword: boolean = true;
  validationUser: boolean = true;

  //FocusTextBox
  isFocusName: boolean = false;
  isFocusCourse: boolean = false;
  isFocusUser: boolean = false;
  isFocusPassword: boolean = false;
  isFocusConfirmPassword: boolean = false;

  focusName() {
    this.isFocusName = true;
  }

  blurName(value: string) {
    if (value === undefined || value === '')
      this.isFocusName = false;
  }

  focusCourse() {
    this.isFocusCourse = true;
  }

  blurCourse(value: string) {
    if (value === 'default')
      this.isFocusCourse = false;
  }

  validCourse(value : string) : boolean {
    if (value === 'default')
      return false;
    else
      return true;
  }

  focusUser() {
    this.isFocusUser = true;
    this.validationUser = true;
  }

  blurUser(value: string) {
    if (value === undefined || value === '')
      this.isFocusUser = false;
  }

  focusPassword() {
    this.isFocusPassword = true;
    this.validationPassword = true;
  }

  blurPassword(value: string) {
    if (value === undefined || value === '')
      this.isFocusPassword = false;
  }

  focusConfirmPassword() {
    this.isFocusConfirmPassword = true;
    this.validationPassword = true;
  }

  blurConfirmPassword(value: string) {
    if (value === undefined || value === '')
      this.isFocusConfirmPassword = false;
  }

  onSubmit() {
    if (this.objPerson.password != this.validPasswordValue) {
      this.validationPassword = false;
    } else {
      this.personService.getListPerson().subscribe(
        listPerson => {
          for(let person of listPerson){
            if (person.user === this.objPerson.user) {
              this.validationUser = false;
              return;
            }
          }
          if (this.validationUser) {
            this.personService.addPerson(this.objPerson);
            localStorage['token'] = 'xptoh26410x5=50';
            this.router.navigate(['/home']);
          }
        }
      );
    }
  }

  constructor(private screenService: ScreenService, private courseService: CourseService, private personService : PersonService, private router : Router) {
    screenService.changeScreenLogin();
  }

  ngOnInit() {
    this.courseService.getListCourse().subscribe(
      courses => {
        this.listCourse = courses;
      }
    );
    this.objPerson.course = 'default';
  }

}
