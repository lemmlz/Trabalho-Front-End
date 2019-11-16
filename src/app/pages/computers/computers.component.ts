import { Component, OnInit, TemplateRef } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  collegeLink : string;
  labLink : string;

  pcs: string[] = ['LI1001', 'LI1002', 'LI1003', 'LI1004', 'LI1005', 'LI1006', 'LI1007', 'LI1008'];
  configModal = { class: 'modal-dialog-centered' }
  modalRef: BsModalRef;
  computer: string;
  isEmptyTitle: boolean = false;
  isEmptyDescription: boolean = false;

  constructor(
    private sidebarLeftService: SidebarLeftService,
    private modalService: BsModalService,
    private link: ActivatedRoute,
    private constantsService : ConstantsService,
    private router : Router
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.configModal);
  }

  setComputer(computerName: string) {
    this.computer = computerName;
  }

  checkTitleField(valueTitle: string) {
    if (valueTitle === '')
      this.isEmptyTitle = true;
    else
      this.isEmptyTitle = false;
  }

  checkDescriptionField(valueDescription: string) {
    if (valueDescription === '')
      this.isEmptyDescription = true;
    else
      this.isEmptyDescription = false;
  }

  checkAllField(valueTitle: string, valueDescription: string) {
    if (valueTitle === '' || valueDescription === '') {
      this.checkTitleField(valueTitle);
      this.checkDescriptionField(valueDescription);
    } else {
      this.isEmptyTitle = false;
      this.isEmptyDescription = false;
      this.modalRef.hide();
    }
  }

  ngOnInit() {
    this.constantsService.getListCollege().subscribe(
      listColleges => {
        this.link.params.subscribe(
          res => {
            for (let col of listColleges) {
              if (col.name === res.college) {
                this.collegeLink = res.college;
                this.constantsService.getListLaboratory().subscribe(
                  listLab => {
                    for(let lab of listLab){
                      if (lab.number === res.laboratory) {
                        this.labLink = res.laboratory;
                        return;
                      }
                    }
                    this.router.navigate(['/']);
                  }
                );
                return;
              }
            }
            this.router.navigate(['/']);
          }
        );
      }
    );
  }

}
