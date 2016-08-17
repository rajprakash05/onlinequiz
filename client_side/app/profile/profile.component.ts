import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp ,JwtHelper} from 'angular2-jwt';
import { sharedService } from '../sharedservice';


const template = './client_side/app/profile/profile.component.html';

@Component({
  selector: 'profile',
  directives: [ CORE_DIRECTIVES ],
  templateUrl: './client_side/app/profile/profile.html',
  styles:['./client_side/app/profile/profile.component.css'] 
})
export class ProfileComponent {
  token: string;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp,private s: sharedService) {
    
    s.condition=false;
    this.token = localStorage.getItem('id_token');
  
    
  }
    

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }

 //  */E:\onlinequiz\client_side\app\profile\profile.component.html
}