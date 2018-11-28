import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'pradeep'
  password = ''
  errorMessage = 'Invalid Credentials!!'
  invalidLogin = false;

  constructor( private router:Router, private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    //if (this.username === 'pradeep' && this.password === 'dummy') {
    console.log('Before : '+sessionStorage.getItem('authenticatedUser'))
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      sessionStorage.setItem('authenticatedUser',this.username)
      console.log('After : '+sessionStorage.getItem('authenticatedUser'))
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true
    }
  }

}
