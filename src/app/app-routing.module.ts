import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentLayoutComponent} from './layout/components/content-layout/content-layout.component';



const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
