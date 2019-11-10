import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/model/person.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  modalRef : BsModalRef;
  configModal = { class: 'modal-dialog-centered' }
  objPerson : Person;

  constructor(private sidebarLeftService:SidebarLeftService, private modalService : BsModalService, private personService : PersonService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.configModal);
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
  }

}
