import { Component } from '@angular/core';
import { Validators,Control,NgStyle } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ForgetPasswordService} from './forget_password.service'


interface fgmail{
  Fgemail:string;
}



@Component({
    selector: 'forget-password',
    providers: [ForgetPasswordService],
    directives: [REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES],
    templateUrl:'./client_side/app/forget_password/forget_password.component.html',
    styleUrls:['client_side/app/forget_password/forget_password.component.css']
                                                                   
})

export class ForgetPassword{
 public fgForm: FormGroup;
 public submitted: boolean=false;
 showerr:boolean=true;
 showser_err:boolean=true;
 useremail:string="";
 dat:string;
 public events: any[] = [];

 bgclr="#";
 bdrclr="#";  

     constructor(private builder: FormBuilder,private fg:ForgetPasswordService) {
    
     this.fgForm = this.builder.group({
            Fgemail: ['', [<any>Validators.required, <any>Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]]
            
             
        });
        
}
     
     fgpwd(m:fgmail,isValid:boolean){
       
        console.log(m);
        if(isValid)
        {
         this.showerr=true;

          this.fg.reset(m).subscribe(
                data => this.dat = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            ); 
             console.log(this.dat)
          if(false)
          {
             // this.showser_err=true;
          } 

          else{
              this.bgclr="#rgba(185, 8, 8, 0.57)";
              this.bdrclr="rgba(185, 8, 8, 0.57)";
              this.useremail=m.Fgemail;
              this.showser_err=false;
              
          }  
    }
    else{
        
     this.bgclr="rgba(185, 8, 8, 0.57)";
     this.bdrclr="rgba(185, 8, 8, 0.57)";

     this.showerr=false;
     

     
    }
        
     }
    
}
