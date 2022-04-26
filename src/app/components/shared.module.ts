import { MaterialModule } from './../core/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    ItemListComponent
  ]
})
export class SharedModule { }
