import { Component } from '@angular/core';
import { Validators,Control,CORE_DIRECTIVES ,NgIf} from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';
import { LoginService } from './login.service';
import { sharedService } from '../sharedservice';
import { tokenNotExpired } from 'angular2-jwt';


export interface cred
{
    Email:string;
    Password:string;
}



@Component({
    selector: 'login',
    providers: [LoginService],
    directives: [REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES,CORE_DIRECTIVES],
    templateUrl:'./client_side/app/login/login.component.html',
    styleUrls:['client_side/app/login/login.component.css']
                                                                   
})

export class LoginComponent{

   public loginForm: FormGroup;
   public submitted: boolean;
   public events: any[] = [];  
   showerr:boolean=true;
   showser_err:boolean=true;
   private dat:boolean;
   private userid:string;
   public showform:boolean=false;

   constructor(private rr:LoginService,private builder: FormBuilder,public router: Router,private s: sharedService) {
    

     this.loginForm = this.builder.group({
            Email: ['', [<any>Validators.required, <any>Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]],
            Password: ['', [<any>Validators.required]]
             
        });


  
    if (tokenNotExpired()) {
      s.condition=false;
      this.showform=false;
      if(localStorage.getItem('user_type')==="admin"){
          this.router.navigate(['/admin_dashboard']);
       }
       else{
         this.router.navigate(['/profile']);
       }
       
     }

     else
    {
       
        this.showform=true;
        s.condition=true;
        s.login=true;
        s.signup=false;
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
          this.dat=response.json().loggedin;
          this.router.navigate(['/profile']);
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