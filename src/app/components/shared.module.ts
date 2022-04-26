import { MaterialModule } from './../core/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ConfigDialogComponent } from './config-dialog/config-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToolbarComponent,
    ItemListComponent,
    ConfigDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ToolbarComponent,
    ItemListComponent,
    ConfigDialogComponent
  ]
})
export class SharedModule { }
