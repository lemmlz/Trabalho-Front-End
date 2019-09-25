import { Component, OnInit, Input } from '@angular/core';
import { Laboratory } from './laboratory.module';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  @Input() lab:Laboratory;

  constructor() { }

  ngOnInit() {
  }

}
