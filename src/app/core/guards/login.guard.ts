import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }

  canActivate(): boolean {
    if(this.authService.loggedIn()){
      this.router.navigate(['dashboard']);
      return false;
    } else {
      return true;
    }
    
  }
  
}
