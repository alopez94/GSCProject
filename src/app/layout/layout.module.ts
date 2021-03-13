import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

// Material
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginLayoutComponent, 
    ContentLayoutComponent, 
    SidenavComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    
    //Material
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class LayoutModule { }
