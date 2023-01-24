import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkListComponent } from './mark-list.component';

const routes: Routes = [
  {
    path: '',
    component: MarkListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkListRoutingModule { }
