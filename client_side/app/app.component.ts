import { Component,OnInit } from '@angular/core';
import { NavBarComponent} from './nav_bar/nav_bar.component';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
import { NgIf } from '@angular/common';
import { sharedService } from './sharedservice';
import { tokenNotExpired } from 'angular2-jwt';





@Component({
  selector: 'my-app',
  directives: [NavBarComponent,ROUTER_DIRECTIVES],
  template: `
  <div >
    
    <nav-bar *ngIf="s.condition"></nav-bar>
    <router-outlet></router-outlet>
  

  </div>
  `

})
export class AppComponent implements OnInit {
  
   constructor(private s: sharedService,public router: Router) {
    console.log("content started");
    s.condition=true;
  }
  ngOnInit(){
    if (tokenNotExpired()) {
      this.s.condition=false;
      
      if(localStorage.getItem('user_type')==="admin"){
          this.router.navigate(['/admin_dashboard']);
       }
       else{
         this.router.navigate(['/profile']);
       }
       
     }
  }
 }
 