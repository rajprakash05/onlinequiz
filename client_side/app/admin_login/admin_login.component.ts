import { Component } from '@angular/core';
import { Validators,Control,CORE_DIRECTIVES } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';
import { AdminLoginService } from './admin_login.service';
import { sharedService } from '../sharedservice';
import { tokenNotExpired } from 'angular2-jwt';


export interface cred
{
    Username:string;
    Password:string;
}



@Component({
    selector: 'admin-login',
    providers: [AdminLoginService],
    directives: [REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES,CORE_DIRECTIVES],
    templateUrl:'./client_side/app/admin_login/admin_login.html',
    styleUrls:['client_side/app/admin_login/admin_login.css']
                                                                   
})

export class AdminLoginComponent{

   public loginForm: FormGroup;
   public submitted: boolean;
   public events: any[] = [];  
   showerr:boolean=true;
   showser_err:boolean=true;
   private dat:boolean;
   private userid:string;

   constructor(private rr:AdminLoginService,private builder: FormBuilder,public router: Router,private s: sharedService) {
    

    this.loginForm = this.builder.group({
            Username: ['', [<any>Validators.required]],
            Password: ['', [<any>Validators.required]]
             
        });

    if (tokenNotExpired()) {
      s.condition=false;
       this.router.navigate(['/admin_dashboard']);
    }

   else
   {
      

        s.condition=true;
        s.login=true;
        s.signup=true;
   }


    
        
}

login(c:cred,isValid: boolean)
{
   
    if(isValid)
    {
       this.showerr=true;

      this.rr.login(c).subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          localStorage.setItem('loggedin', response.json().loggedin);
          localStorage.setItem('user_type', response.json().user_type);
          this.dat=response.json().loggedin;
          this.router.navigate(['/admin_dashboard']);
        },
        error => {
          this.showser_err=false;
          console.log(error);
        }
      );

   
    }
    else{
        
    

     this.showerr=false;
     
    }
    


}
 

 


}