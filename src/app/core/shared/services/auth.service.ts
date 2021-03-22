import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = environment.api_url;
  loginURL = 'account/login';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, contrasena: string){
    console.log("usuario" + email, "contrasenia" + contrasena);
    return this.http.post(this.apiURL + "account/login", {userName: email, password: contrasena});
  }

  loggedIn(){
    return !!localStorage.getItem('auth_token');
  }

  getToken(){
    return localStorage.getItem('auth_token');
  }

  logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['/auth']);
  }
}
