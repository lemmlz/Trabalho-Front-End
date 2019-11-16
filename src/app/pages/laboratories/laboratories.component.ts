import { Component, OnInit } from '@angular/core';
import { Laboratory } from 'src/app/model/laboratory.module';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { ScreenService } from 'src/app/services/screen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent implements OnInit {

  labs: Laboratory[] = [];

  constructor(
    private sidebarLeftService: SidebarLeftService,
    private screenService: ScreenService,
    private link: ActivatedRoute,
    private constantsService: ConstantsService,
    private router : Router
  ) {
    screenService.changeScreenMain();
  }

  ngOnInit() {
    this.constantsService.getListCollege().subscribe(
      listColleges => {
        this.link.params.subscribe(
          res => {
            for (let col of listColleges) {
              if (col.name === res.college) {
                return;
              }
            }
            this.router.navigate(['/']);
          }
        );
      }
    );
    this.constantsService.getListLaboratory().subscribe(
      list => {
        this.labs = list;
      }
    );
  }

}
