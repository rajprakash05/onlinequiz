import { Component } from '@angular/core';
import { NavBarComponent} from './nav_bar/nav_bar.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgIf } from '@angular/common';
import { sharedService } from './sharedservice';





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
export class AppComponent {
   constructor(private s: sharedService) {
    console.log("content started");
    s.condition=true;
  }
 }
 