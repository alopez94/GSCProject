import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent
  },
  {
    path: 'crear',
    component: CreateComponent
  },
  {
    path: 'lista',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
