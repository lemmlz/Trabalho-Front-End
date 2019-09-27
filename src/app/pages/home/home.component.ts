import { Component, OnInit, Input } from '@angular/core';
import { SidebarLeftService } from '../../services/sidebar-left.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private sidebarService: SidebarLeftService) { }

  ngOnInit() {
  }

}
