import { Component,HostListener } from '@angular/core';
import {NgStyle,NgIf} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { sharedService } from '../sharedservice';


@Component({
    selector: 'nav-bar',
    templateUrl:'./client_side/app/nav_bar/nav_bar.html',
    styleUrls:['./client_side/app/nav_bar/nav_bar.component.css'],
    directives: [ROUTER_DIRECTIVES,NgIf]
                                                                   
})
export class NavBarComponent
{
   @HostListener('window:scroll', ['$event'])
    track(event) {
        if( document.body.scrollTop < 40){
            
            this.nv_bgc="rgba(34, 34, 34, 0)";
            this.nv_brc="rgba(8, 8, 8, 0)";
          console.log("top");
          
        }
        else
        {

          this.nv_bgc="#f9ad04";
            this.nv_brc="rgba(8, 8, 8, 0)";


            console.log("bot");
        }
   //  console.debug("Scroll Event", document.body.scrollTop);
    }
    

    nv_bgc="rgba(34, 34, 34, 0)";
    nv_brc="rgba(8, 8, 8, 0)";

    snav_w='0px';
    btnflag:boolean=false;

    constructor(public s:sharedService){
       
    }

    snav_open()
    {
      this.snav_w='250px';
      this.btnflag=true;
      console.log(this.btnflag);
      
    }
    closeNav()
    {
        this.snav_w='0px';
       this.btnflag=false;
        console.log(this.btnflag);
    }

}