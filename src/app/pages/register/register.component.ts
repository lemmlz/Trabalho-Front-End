import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/model/course.module';
import { Person } from 'src/app/model/person.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  listCourse: Course[];

  objStudent : Person = new Person();
  validPasswordValue : string;

  //Validation
  validationPassword: boolean = true;

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
    if (this.objStudent.password != this.validPasswordValue) {
      this.validationPassword = false;
    } else {
      
    }
  }

  constructor(private screenService: ScreenService, private courseService: CourseService) {
    screenService.changeScreenLogin();
  }

  ngOnInit() {
    this.courseService.getListCourse().subscribe(
      courses => {
        this.listCourse = courses;
      }
    );
    this.objStudent.course = 'default';
  }

}
