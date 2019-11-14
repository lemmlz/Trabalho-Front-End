import { Component, OnInit, Input } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/model/person.module';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {

  constructor(private sidebarLeftService : SidebarLeftService, private personService : PersonService) {
    
   }

  logOff(){
    localStorage.removeItem('token');
    localStorage.removeItem('login');
  }

  ngOnInit() {

  }

}
