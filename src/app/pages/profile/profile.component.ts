import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/model/person.module';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/model/course.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageEdit: boolean = false;
  nameEdit: boolean = false;
  courseEdit: boolean = false;
  passwordEdit: boolean = false;

  modalRef : BsModalRef;
  configModal = { class: 'modal-dialog-centered' }
  objPerson : Person;
  listCourse : Course[];

  constructor(private sidebarLeftService:SidebarLeftService, private modalService : BsModalService, private personService : PersonService, private courseService : CourseService) {
    
   }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.configModal);
  }

  editImage(){
    this.imageEdit = true;
  }
  
  ngOnInit() {
    this.personService.getListPerson().subscribe(
      listPerson => {
        for (let person of listPerson) {
          if (person.user == localStorage['login']) {
            this.objPerson = person;
            return;
          }
        }
      }
    );
    this.courseService.getListCourse().subscribe(
      list => {
        this.listCourse = list;
      }
    )
  }

}
