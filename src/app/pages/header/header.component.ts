import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarLeftService : SidebarLeftService) { }

  ngOnInit() {
  }

}
