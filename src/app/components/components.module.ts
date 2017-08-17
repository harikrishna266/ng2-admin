import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';    
import { MdCardModule,
            MdToolbarModule,
            MdButtonModule,
            MdIconModule,
            MdListModule,
            MdProgressBarModule,
            MdTabsModule
          } from '@angular/material';

import { DashcardComponent } from './dashcard/dashcard.component';
import { FeedsComponent } from './feeds/feeds.component';
import { LineChartComponent } from './highcharts/line-chart/line-chart.component';
import { ChartModule } from 'angular2-highcharts';
declare var require: any;

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdProgressBarModule,
    MdTabsModule,
    ChartModule.forRoot(require('highcharts'))
    
  ],
  declarations: [
                  DashcardComponent,
                  FeedsComponent,
                  LineChartComponent
                ],
  exports: [
              DashcardComponent,
              FeedsComponent,
              LineChartComponent
            ]
})
export class ComponentsModule { }
