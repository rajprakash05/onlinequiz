import { Component,ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router,ROUTER_DIRECTIVES } from '@angular/router';
import { AuthHttp ,JwtHelper} from 'angular2-jwt';
import { sharedService } from '../sharedservice';
import {TooltipContainerComponent,TooltipDirective} from 'ng2-bootstrap/ng2-bootstrap';




@Component({
  selector: 'admin-dashboard',
  directives: [ CORE_DIRECTIVES,ROUTER_DIRECTIVES,TooltipContainerComponent,TooltipDirective ],
  templateUrl: './client_side/app/admin_dashboard/admin_dashboard.html',
  styleUrls:['./client_side/app/admin_dashboard/admin_dashboard.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent {
  token: string;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp,private s: sharedService) {
    
    s.condition=false;
    this.token = localStorage.getItem('id_token');
  
    
  }
    inputModel:string;

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('loggedin');
    localStorage.removeItem('user_type');
    this.router.navigate(['/login']);
  }

snav_w='60px';
btnflag:boolean=true;
contentwrap="60px";
 snav_open()
    {
       this.snav_w='60px';
       this.btnflag=true;
      this.contentwrap="60px";
      console.log(this.btnflag);
      
    }
    closeNav()
    {
        this.snav_w='0px';
        this.btnflag=false;
        this.contentwrap="0px";
        console.log(this.btnflag);
    }
 
}