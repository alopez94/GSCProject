import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'new',
    component: UsuariosFormComponent
  },
  {
    path: 'edit/:id',
    component: UsuariosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
