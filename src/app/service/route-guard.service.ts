import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //console.log(this.hardcodedAuthenticationService.isUserLoggedIn());
    if (this.hardcodedAuthenticationService.isUserLoggedIn()){
      //console.log('Guard Check Pass')
      return true;
    } else {
      this.router.navigate(['login']);
      //console.log('Guard Check Fail')
      return false;
    }   
  }  
}
