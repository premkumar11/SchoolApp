import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkEditComponent } from './mark-edit.component';
import { MarkEditRoutingModule } from './mark-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MarkEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MarkEditComponent
  ]
})
export class MarkEditModule { }
