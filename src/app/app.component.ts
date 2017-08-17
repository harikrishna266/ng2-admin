import {Component, NgModule,OnInit,EventEmitter,Output, trigger,Input, transition, style, animate, state} from '@angular/core'

import {menus} from './sample/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {    

    public menus = menus;
    helpMenuOpen: boolean = false;

    constructor() { }

    

}
