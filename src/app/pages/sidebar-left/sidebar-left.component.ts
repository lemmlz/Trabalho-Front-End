import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {

  @Input() statusSidebarLeft:boolean;

  constructor() { }

  ngOnInit() {
  }

}