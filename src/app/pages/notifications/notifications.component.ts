import { Component, OnInit } from '@angular/core';
import { NotificationComputers } from './notification.module';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { SidebarLeftService } from 'src/app/services/sidebar-left.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  
  icon: any[] = [ faTimes, faPen ];
  notifications: NotificationComputers[] = [
    {
      id: 1,
      name:'José da Silva',
      college:'FACE',
      laboratory:'A104',
      computer:'LI1003',
      date: Date.now(),
      title:'Sketchup',
      description:'Estou entrando no Sketchup, porém a tela está preta',
      bgColor:''
    },
    {
      id: 2,
      name:'José Pereira',
      college:'FEA',
      laboratory:'F532',
      computer:'LI500',
      date: Date.now(),
      title:'computador',
      description:'O mouse não funciona',
      bgColor:'#dc354545'
    },    
    {
      id: 3,
      name:'Adalberto',
      college:'FACE',
      laboratory:'A120',
      computer:'LI2054',
      date: Date.now(),
      title:'PDF',
      description:'Não consigo usara o pdf para ver meus arquivos',
      bgColor:''
    },    
    {
      id: 4,
      name:'Ana Algusta',
      college:'FCH',
      laboratory:'A230',
      computer:'LI20324',
      date: Date.now(),
      title:'Computador',
      description:'Não consigo usar o computador , eu ja liguei e desligui varias vezes e não aparece nada na tela',
      bgColor:'#dc354545'
    }
  ];

  constructor( private sidebarLeftService : SidebarLeftService) { }

  ngOnInit() {
  }

}
