import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';

const childRoutes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent },
    { path: 'detail/:id/:name', component: DetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
})
export class CarRoutingModule { }