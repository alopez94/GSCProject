import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [CategoriasComponent, UsuariosComponent],
  imports: [
    CommonModule,

    //material
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,

    FlexLayoutModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
