import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,

    //Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

    FlexLayoutModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
