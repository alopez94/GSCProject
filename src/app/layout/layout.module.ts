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
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChatComponent } from './components/chat/chat.component';



@NgModule({
  declarations: [
    LoginLayoutComponent, 
    ContentLayoutComponent, 
    SidenavComponent, ChatComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    
    //Material
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,

    FlexLayoutModule,
    
  ]
})
export class LayoutModule { }
