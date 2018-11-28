import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password:string){
    if (username === 'pradeep' && password === 'dummy') 
      return true;
    else 
      return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
    console.log(sessionStorage.getItem('authenticatedUser'));
  }
}
