import { Component } from '@angular/core';
import { ScreenService } from './services/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GerenciaManutencao';

  constructor(private screenService: ScreenService){ }
}
