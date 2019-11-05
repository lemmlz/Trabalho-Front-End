import { Component, OnInit } from '@angular/core';
import { Laboratory } from 'src/app/model/laboratory.module';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent implements OnInit {

  labs:Laboratory[] = [
  {
    name:"Laboratório 1",
    number:"A201"
  },
  {
    name:"Laboratório 2",
    number:"A202"
  },
  {
    name:"Laboratório 3",
    number:"A203"
  },
  {
    name:"Laboratório 4",
    number:"A204"
  },
  {
    name:"Laboratório 5",
    number:"A205"
  },
  {
    name:"Laboratório 6",
    number:"A206"
  }
];

  constructor(private sidebarLeftService : SidebarLeftService, private screenService : ScreenService) {
    screenService.changeScreenMain();
  }

  ngOnInit() {
  }

}
