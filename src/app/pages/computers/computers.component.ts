import { Component, OnInit, TemplateRef } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';
import { NotificationComputers } from 'src/app/model/notification.module';
import { Subscription } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  collegeLink : string;
  labLink : string;

  objReport : NotificationComputers = new NotificationComputers();

  pcs: string[] = [];
  configModal = { class: 'modal-dialog-centered' }
  modalRef: BsModalRef;
  computer: string;
  isEmptyTitle: boolean = false;
  isEmptyDescription: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    private sidebarLeftService: SidebarLeftService,
    private modalService: BsModalService,
    private link: ActivatedRoute,
    private constantsService : ConstantsService,
    private router : Router,
    private personService : PersonService,
    private notificationService : NotificationsService
  ) { 
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        this.objReport.title = '';
        this.objReport.description = '';
      })
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.configModal);
  }

  setComputer(computerName: string) {
    this.computer = computerName;
  }

  onSubmit(){
    this.personService.getListPerson().subscribe(
      listPerson => {
        for(let person of listPerson){
          if (person.user == localStorage['login']) {
            this.objReport.name = person.name;
            this.objReport.college = this.collegeLink;
            this.objReport.computer = this.computer;
            this.objReport.laboratory = this.labLink;
            this.objReport.date = Date.now();
            this.objReport.status = false;
            this.notificationService.addReport(this.objReport);
            this.modalRef.hide();
            alert('Cadastrado com sucesso!');
            return;
          }
        }
        alert('Erro ao cadastrar!');
      }
    );
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
    this.constantsService.getListComputer().subscribe(
      list => {
        this.pcs = list;
      }
    );
  }

}
