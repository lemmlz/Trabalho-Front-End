import { Component, OnInit } from '@angular/core';
import { Laboratory } from 'src/app/pages/laboratories/laboratory/laboratory.module';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent implements OnInit {

  labs:Laboratory[] = [
  {
    name:"Laboratório 1",
    number:"A201"
  },
  {
    name:"Laboratório 2",
    number:"A202"
  },
  {
    name:"Laboratório 3",
    number:"A203"
  },
  {
    name:"Laboratório 4",
    number:"A204"
  },
  {
    name:"Laboratório 5",
    number:"A205"
  },
  {
    name:"Laboratório 6",
    number:"A206"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
