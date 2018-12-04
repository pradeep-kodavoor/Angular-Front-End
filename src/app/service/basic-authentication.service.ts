import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient:HttpClient) { }

  executeAuthenticationService(username:string,password:string){
    let basicAuthHeadStr = 'Basic' + window.btoa(username +':'+ password)
    let headers = new HttpHeaders({ 
      Authorization:basicAuthHeadStr
      })
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers}).pipe(
      map(data => {
        sessionStorage.setItem('authenticatedUser',username)
        sessionStorage.setItem('token',basicAuthHeadStr)
        return data
      })
    )

  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }
  
  getAuthenticatedToken(){
    return sessionStorage.getItem('token');
  }
}

export class AuthenticationBean {
  constructor (public message:string){}
}
