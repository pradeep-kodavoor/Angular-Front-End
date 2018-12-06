import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient:HttpClient) { }
  jwtToken:string

  executeBasicAuthenticationService(username:string,password:string){
    let basicAuthHeadStr = 'Basic ' + window.btoa(username +':'+ password)
    let headers = new HttpHeaders({ 
      Authorization:basicAuthHeadStr
      })
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers})
    .pipe(
      map(data => {
        sessionStorage.setItem('authenticatedUser',username)
        sessionStorage.setItem('token',basicAuthHeadStr)
        return data
      })
    )

  }

  executeJWTAuthenticationService(username:string,password:string){
    
    return this.httpClient.post<JwtTokenResponse>(`${API_URL}/authenticate`,{username:username,password:password}).pipe(
      map( data=> {
        sessionStorage.setItem('authenticatedUser',username)
        let jwtToken = 'Bearer '+data.token
        sessionStorage.setItem('token',jwtToken)
        console.log(data.token)
        return data
      })
    )

  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken(){
    return sessionStorage.getItem('token');
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor (public message:string){}
}

export class JwtTokenResponse {
  constructor (public token:string) {}
}
