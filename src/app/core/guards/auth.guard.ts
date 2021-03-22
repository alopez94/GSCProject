import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  canActivate(): boolean {
    
    let isLoggedIn: boolean = this.authService.loggedIn();

    if(isLoggedIn){
      return true;
    }

    this.router.navigate(['auth']);
    return false;
  }
  
}
