import { Category } from "./category";
import { DataUser } from "./data-user";

export interface User {
    id: number;
    username: string;
    password: string;
    categoryId: string;
    category: Category;
    dataUser: DataUser;
}