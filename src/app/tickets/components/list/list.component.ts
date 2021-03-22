import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/tickets';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'active', 'date', 'creator', 'assigned'];
  dataSource: any;


  constructor(
    private ticketsService: TicketsService
  ) { }

  ngOnInit(): void {
    this.getTicketes()
  }

  getTicketes(){
    this.ticketsService.getTicket()
      .subscribe(
        res => {
          this.dataSource = res;
          console.log(res);
        }
      )
  }

}
