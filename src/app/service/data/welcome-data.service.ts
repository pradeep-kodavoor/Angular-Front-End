import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloWorldBean } from 'src/app/welcome/welcome.component';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient:HttpClient) { }

  getResponseMessage() {
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

  getResponseMessageWithParameter(name:string) {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`);
  }

}
