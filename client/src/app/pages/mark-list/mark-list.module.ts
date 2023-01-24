import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkListComponent } from './mark-list.component';
import { MarkListRoutingModule } from './mark-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MarkListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MarkListComponent
  ]
})
export class MarkListModule { }
