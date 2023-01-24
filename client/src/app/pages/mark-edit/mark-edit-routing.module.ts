import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkEditComponent } from './mark-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MarkEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkEditRoutingModule { }
