import { Ticket } from "src/app/tickets/models/tickets";

export interface DataUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    userId: number;
    ticketsAssigned: Ticket[]
}