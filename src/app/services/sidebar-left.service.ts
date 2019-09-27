import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarLeftService {
  constructor() {};
  
  private statusSidebar:boolean = false;

  changeStatus(){
    this.statusSidebar = !this.statusSidebar;
  }

  get status(){ return this.statusSidebar;}
}
