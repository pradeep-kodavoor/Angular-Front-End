import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService:BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    // let username = 'pradeep'
    // let password = 'dummy'
    // let basicAuthHeadStr = 'Basic' + window.btoa(username +':'+ password)

    let basicAuthHeadStr = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if (basicAuthHeadStr && username){
      request = request.clone({
        setHeaders : {
          Authorization:basicAuthHeadStr
        }
      });
    }
    return next.handle(request)
  }
}
