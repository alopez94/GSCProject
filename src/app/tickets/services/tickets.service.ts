import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ticket } from './../models/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  controllerUrl = "Tickets";
  apiUrl = environment.api_url;

  constructor(
    private http: HttpClient,
  ) { }

  saveTicket(ticket: Ticket){
    return this.http.post<Ticket>(this.apiUrl + this.controllerUrl, ticket);
  }

  getTicket(){
    return this.http.get<Ticket[]>(this.apiUrl + this.controllerUrl);
  }

  getTicketId(id: number){
    return this.http.get<Ticket>(this.apiUrl + this.controllerUrl + "/" + id);
  }

  editTicket(id: number, ticket: Ticket){
    return this.http.put<Ticket>(this.apiUrl + this.controllerUrl + "/" + id, ticket);
  }

}
