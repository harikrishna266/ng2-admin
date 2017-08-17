import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdListModule,MdButtonModule, MdChipsModule, MdIconModule,MdRippleModule} from '@angular/material';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SqueezeBoxModule} from 'squeezebox';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    BrowserAnimationsModule,
    MdRippleModule,
    SqueezeBoxModule,
    MdChipsModule
  ],
  declarations: [
      SidemenuComponent,
  ],
  exports : [
      SidemenuComponent,
  ]
})
export class ElementsModule { }
