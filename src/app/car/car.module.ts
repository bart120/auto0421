import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarModule { }
