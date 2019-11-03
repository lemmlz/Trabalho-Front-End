import { Component, OnInit, TemplateRef } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  pcs:string[] = ['LI1001','LI1002','LI1003','LI1004','LI1005','LI1006','LI1007','LI1008'];
  configModal = { class: 'modal-dialog-centered' }
  modalRef : BsModalRef;
  computer : string;
  isEmptyTitle : boolean = false;
  isEmptyDescription : boolean = false;

  constructor(private sidebarLeftService : SidebarLeftService, private modalService : BsModalService) {
   }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.configModal);
  }

  setComputer(computerName: string){
    this.computer = computerName;
  }

  checkTitleField(valueTitle:string){
    if(valueTitle === '')
      this.isEmptyTitle = true;
    else
      this.isEmptyTitle = false;
  }

  checkDescriptionField(valueDescription:string){
    if(valueDescription === '')
      this.isEmptyDescription = true;
    else
      this.isEmptyDescription = false;
  }

  checkAllField(valueTitle:string, valueDescription:string){
    if(valueTitle === '' || valueDescription === ''){
      this.checkTitleField(valueTitle);
      this.checkDescriptionField(valueDescription);
    } else {
      this.isEmptyTitle = false;
      this.isEmptyDescription = false;
      this.modalRef.hide();
    }
  }

  ngOnInit() {
  }

}
