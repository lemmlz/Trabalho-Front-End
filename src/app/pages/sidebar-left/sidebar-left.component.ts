import { Component, OnInit, Input } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {

  constructor(private sidebarLeftService : SidebarLeftService) { }

  ngOnInit() {
  }

}
