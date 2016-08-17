import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injector} from '@angular/core'
import 'rxjs/add/operator/map';
import { domain_name } from '../../lib';
import { contentHeaders } from '../../common/header';


@Injectable()

export class SingleQesUploadService {
 http:Http;
 API_URL: string = 'http://'+domain_name+'/single_qus';
 constructor(http:Http)
 {
   this.http=http;
 }

 upload(file){

  
    

    let options = new RequestOptions({ headers: contentHeaders, method: "post" });
   let result= this.http.post(this.API_URL, file,options)
     .catch(this.handleError);
     
     return result;

  }

  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

 


}