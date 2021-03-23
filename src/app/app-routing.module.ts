import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
import { ChatComponent } from './layout/components/chat/chat.component';
import { ContentLayoutComponent } from './layout/components/content-layout/content-layout.component';
import { LoginLayoutComponent } from './layout/components/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'chat',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: LoginLayoutComponent,
    // canActivate: [LoginGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'db',
    component: ContentLayoutComponent,
    // canActivate: [AuthGuard],
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
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  },
  {
    path: 'chat',
    component: ChatComponent,
    pathMatch: 'full'
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
