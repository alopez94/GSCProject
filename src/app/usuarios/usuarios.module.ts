import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CategoriasComponent, UsuariosComponent, UsuariosFormComponent],
  imports: [
    CommonModule,

    //material
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    
    ReactiveFormsModule,
    FlexLayoutModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
