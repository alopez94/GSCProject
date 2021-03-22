import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL = environment.api_url;
  apiURL = "user"

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get<User[]>(this.baseURL + this.apiURL);
  }

  getUserById(id: number){
    return this.http.get<User>(this.baseURL + this.apiURL + "/" + id);
  }

  createUser(user: User){
    return this.http.post<User>(this.baseURL + this.apiURL, user);
  }

  putUser(user: User){
    return this.http.put<User>(this.baseURL + this.apiURL, user);
  }

}
