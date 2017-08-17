import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from '../../components/components.module';


const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent }
]        

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    ComponentsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }


