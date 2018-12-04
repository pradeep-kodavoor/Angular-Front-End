import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloWorldBean } from 'src/app/welcome/welcome.component';
import { API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient:HttpClient) { }

  getResponseMessage() {
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

  getResponseMessageWithParameter(name:string) {

    let basicAuthHeadStr = this.createBasicAuthenticationHttpHeader();
    //let basicAuthHeadStr = 'Basic' + window.btoa('pradeep' +':'+ 'dummy')
    let headers = new HttpHeaders({ 
      Authorization:basicAuthHeadStr
      })
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean/${name}`,{headers})
  }

  //Failed to load http://localhost:8080/hello-world-bean/pradeep: 
  //Redirect from 'http://localhost:8080/hello-world-bean/pradeep' to 'http://localhost:8080/login' 
  //has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
  //Origin 'http://localhost:4200' is therefore not allowed access.

  //Failed to load http://localhost:8080/hello-world-bean/pradeep: 
  //Response for preflight has invalid HTTP status code 401.

  createBasicAuthenticationHttpHeader(){
    let username = 'pradeep'
    let password = 'dummy'
    let basicAuthHeadStr = 'Basic' + window.btoa(username +':'+ password)
    return basicAuthHeadStr
  }

}
