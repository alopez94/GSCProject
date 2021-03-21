import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';


// Material

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Route[] = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
  },
  
     
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),

    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    
  ]
})
export class AuthModule { }
