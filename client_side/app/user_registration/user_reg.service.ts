import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions,HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injector} from '@angular/core'
import 'rxjs/add/operator/map';
import { domain_name } from '../lib';

@Injectable()

export class UserRegistrationService {
 http:Http;


 API_URL: string = 'http://'+domain_name+'/user_reg';


 constructor(http:Http)
 {
   this.http=http;
 }
 registerUser(user) {
    //let data = JSON.stringify(user);
    //console.log("Testing post data....."+data);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   

    let options = new RequestOptions({ headers: headers, method: "post" });
   return this.http.post(this.API_URL, user,options)
      .map(res => res.json())
     .catch(this.handleError);
  }

  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

    

}