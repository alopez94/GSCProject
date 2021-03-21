import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Material


import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'  



import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,

     // Material
     MatButtonModule,
     MatCheckboxModule,
     MatFormFieldModule,
     MatIconModule,
     MatInputModule,
     MatCardModule,
     MatDividerModule,
     MatGridListModule,
     MatMenuModule,
     LayoutModule,
     MatTableModule
     
     
  ]
})
export class DashboardModule { }
