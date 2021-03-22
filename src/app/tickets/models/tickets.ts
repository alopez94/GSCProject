import { DataUser } from "src/app/usuarios/models/data-user";

export interface Ticket{
    id: number;
    description: string;
    isActive: boolean;
    file?: string;
    dateCreate: Date;
    dataUserAssignedId: number;
    UserAssigned: DataUser;
    dataUserCreatedId: number;
    UserCreated: DataUser;
    Category: number;
}