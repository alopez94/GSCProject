import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { TicketsComponent } from './tickets.component';

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
import {MatDatepickerModule} from '@angular/material/datepicker';




import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [TicketsComponent, CreateComponent, ListComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
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
     MatTableModule,
     MatSelectModule,
     MatDatepickerModule,
     MatNativeDateModule,
     
     
    
  ]
})
export class TicketsModule { }
