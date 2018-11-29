import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name =''
  welcomeMessage:string=''
  errorMessage:string=''

  constructor(
    private route:ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getMessage(){
    this.welcomeDataService.getResponseMessage().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessResponse(response){
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(error){
    this.errorMessage = error.error.message;
  }

}
export class HelloWorldBean {
  message:string    
}