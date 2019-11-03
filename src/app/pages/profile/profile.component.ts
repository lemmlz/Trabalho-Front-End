import { Component, OnInit } from '@angular/core';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private sidebarLeftService:SidebarLeftService) { 
  }

  ngOnInit() {
  }

}
