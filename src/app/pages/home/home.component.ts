import { Component, OnInit, Input } from '@angular/core';
import { SidebarLeftService } from '../../services/sidebar-left.service'
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private sidebarLeftService : SidebarLeftService, private screenService : ScreenService) {
    screenService.changeScreenMain();
  }

  ngOnInit() {
  }

}
