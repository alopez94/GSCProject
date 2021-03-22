import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  user: string;
  position: number;
  area: string;
  problem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, user: 'Carlos S', area: 'producion', problem: 'Impresora'},
  {position: 2, user: 'Javier P', area: 'producion', problem: 'Impresora'},
  {position: 3, user: 'Alex S', area: 'producion', problem: 'Laptop'},
  {position: 4, user: 'Carlos A', area: 'producion', problem: 'PC'},
  {position: 5, user: 'Erick F', area: 'producion', problem: 'Wifi'},
  {position: 6, user: 'Oli F', area: 'producion', problem: 'PC'},
  {position: 7, user: 'Bella M', area: 'producion', problem: 'PC'},
  {position: 8, user: 'Alex P', area: 'producion', problem: 'PC'},
  {position: 9, user: 'Cristiano R', area: 'producion', problem: 'Wifi'},
  {position: 10, user: 'Messi', area: 'producion', problem: 'PC'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'user', 'area', 'problem'];
  dataSource = ELEMENT_DATA;
   
  constructor() {}

  ngOnInit(): void {


    
  }

}
