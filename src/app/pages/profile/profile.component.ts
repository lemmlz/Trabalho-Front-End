import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/model/person.module';
import { ConstantsService } from 'src/app/services/constants.service';
import { Course } from 'src/app/model/course.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  protected PASS_CONST: string = 'h23f9rj34f8j83jg09p8954tj085';
  protected passDB: string;

  imageEdit: boolean = false;
  nameEdit: boolean = false;
  courseEdit: boolean = false;
  passwordEdit: boolean = false;

  imageTemp: string;
  nameTemp: string;
  courseTemp: string;
  passwordTemp: string;

  passConfirm: string = '';

  modalRef: BsModalRef;
  configModal = { class: 'modal-dialog-centered' }
  objPerson: Person = new Person();
  listCourse: Course[];
  subscriptions: Subscription[] = [];


  constructor(
    private sidebarLeftService: SidebarLeftService,
    private modalService: BsModalService,
    private personService: PersonService,
    private constantService: ConstantsService, ) {
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        if (this.imageEdit) {
          this.objPerson.image = this.imageTemp;
          this.imageEdit = false;
        }
        if (this.nameEdit) {
          this.objPerson.name = this.nameTemp;
          this.nameEdit = false;
        }
        if (this.courseEdit) {
          this.objPerson.course = this.courseTemp;
          this.courseEdit = false;
        }
        if (this.passwordEdit) {
          this.objPerson.password = this.PASS_CONST;
          this.passConfirm = '';
          this.passwordEdit = false;
        }
      })
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.configModal);
  }

  editPerson(id: string) {
    switch (id) {
      case 'image':
        this.imageTemp = this.objPerson.image;
        this.imageEdit = true;
        break;
      case 'name':
        this.nameTemp = this.objPerson.name;
        this.nameEdit = true;
        break;
      case 'course':
        this.courseTemp = this.objPerson.course;
        this.courseEdit = true;
        break;
      case 'password':
        this.objPerson.password = '';
        this.passwordEdit = true;
        break;
      default:
        break;
    }
  }

  saveChage(id: string) {
    let auxPerson: Person = new Person();
    auxPerson = this.objPerson;
    switch (id) {
      case 'image':
        if (this.nameEdit)
          auxPerson.name = this.nameTemp;
        if (this.courseEdit)
          auxPerson.course = this.courseTemp;
        auxPerson.password = this.passDB;
        this.personService.updatePerson(auxPerson);
        this.objPerson.password = this.PASS_CONST;
        this.imageEdit = false;
        break;
      case 'name':
        if (this.imageEdit)
          auxPerson.image = this.imageTemp;
        if (this.courseEdit)
          auxPerson.course = this.courseTemp;
        auxPerson.password = this.passDB;
        this.personService.updatePerson(auxPerson);
        this.objPerson.password = this.PASS_CONST;
        this.nameEdit = false;
        break;
      case 'course':
        if (this.nameEdit)
          auxPerson.name = this.nameTemp;
        if (this.imageEdit)
          auxPerson.image = this.imageTemp;
        auxPerson.password = this.passDB;
        this.personService.updatePerson(auxPerson);
        this.objPerson.password = this.PASS_CONST;
        this.courseEdit = false;
        break;
      case 'password':
        if (this.objPerson.password != this.passConfirm) {
          this.objPerson.password = '';
          this.passConfirm = '';
          break;
        }
        if (this.nameEdit)
          auxPerson.name = this.nameTemp;
        if (this.imageEdit)
          auxPerson.image = this.imageTemp;
        if (this.courseEdit)
          auxPerson.course = this.courseTemp;
        this.personService.updatePerson(auxPerson);
        this.passDB = this.passConfirm;
        this.objPerson.password = this.PASS_CONST;
        this.passConfirm = '';
        this.passwordEdit = false;
        break;
      default:
        break;
    }
  }

  cancelChange(id: string) {
    switch (id) {
      case 'image':
        this.objPerson.image = this.imageTemp;
        this.imageEdit = false;
        break;
      case 'name':
        this.objPerson.name = this.nameTemp;
        this.nameEdit = false;
        break;
      case 'course':
        this.objPerson.course = this.courseTemp;
        this.courseEdit = false;
        break;
      case 'password':
        this.objPerson.password = this.PASS_CONST;
        this.passConfirm = '';
        this.passwordEdit = false;
        break;
      default:
        break;
    }
  }

    ngOnInit() {
      this.personService.getListPerson().subscribe(
        listPerson => {
          for (let person of listPerson) {
            if (person.user == localStorage['login']) {
              this.objPerson = person;
              this.passDB = person.password;
              this.objPerson.password = this.PASS_CONST;
              return;
            }
          }
        }
      );
      this.constantService.getListCourse().subscribe(
        list => {
          this.listCourse = list;
        }
      )
    }

  }
