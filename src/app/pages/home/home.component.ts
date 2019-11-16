import { Component, OnInit, Input } from '@angular/core';
import { SidebarLeftService } from '../../services/sidebar-left.service'
import { ScreenService } from 'src/app/services/screen.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { College } from 'src/app/model/college.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listColleges : College[] = [];
  
  constructor(private sidebarLeftService : SidebarLeftService, private screenService : ScreenService, private constantsService : ConstantsService) {
    screenService.changeScreenMain();
  }

  ngOnInit() {
    this.constantsService.getListCollege().subscribe(
      list => {
        this.listColleges = list;
        console.log(this.listColleges);
        
      }
    );
  }

}
