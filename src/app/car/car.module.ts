import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CarRoutingModule } from './car-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    MaterialModule
  ]
})
export class CarModule { }
