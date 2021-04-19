import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule
    ]
})
export class MaterialModule { }