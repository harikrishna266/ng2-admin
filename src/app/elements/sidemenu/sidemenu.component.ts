import {Component, NgModule,OnInit,EventEmitter,Output, trigger,Input, transition, style, animate, state} from '@angular/core'

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateY(10%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0',opacity: 1}))
        ]
      )
    ])]

})
export class SidemenuComponent implements OnInit {

    @Input() menus;

    open:boolean = false;
    constructor() { }

    ngOnInit() {
    }

}
