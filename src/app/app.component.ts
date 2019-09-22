import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GerenciaManutencao';
  status:boolean;
  retractable(){
    if (this.status === true)
      this.status = false;
    else
      this.status = true;
  }
}
