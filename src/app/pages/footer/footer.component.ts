import { Component, OnInit, Input } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear:number = Date.now();

  constructor(private sidebarLeftService : SidebarLeftService) { }

  ngOnInit() {
  }

}
