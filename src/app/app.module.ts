import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NoopAnimationsModule} from '@angular/platform-browser/animations'; //important for animations
import { 
            MdSidenavModule,
            MdToolbarModule,
            MdButtonModule,
            MdIconModule} from '@angular/material';

import { RouterModule } from '@angular/router';            

import { ElementsModule} from './elements/elements.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule} from './components/components.module';
import {PagesModule} from './pages/pages.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent    
    ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    ElementsModule,
    FlexLayoutModule,
    RouterModule,
    ComponentsModule,
    PagesModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
