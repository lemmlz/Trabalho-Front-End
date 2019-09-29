import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login(){
    this.screenService.changeScreen();
  }

  constructor(private sidebarLeftService : SidebarLeftService, private screenService : ScreenService) { }

  ngOnInit() {
  }

}
