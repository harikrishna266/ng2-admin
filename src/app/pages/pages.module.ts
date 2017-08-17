import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ComponentsModule
  ],
  declarations: []
})
export class PagesModule { }
