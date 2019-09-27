import { Component, OnInit } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  pcs:string[] = ['LI1001','LI1002','LI1003','LI1004','LI1005','LI1006','LI1007','LI1008'];

  constructor(private sidebarService: SidebarLeftService) { }

  ngOnInit() {
  }

}
