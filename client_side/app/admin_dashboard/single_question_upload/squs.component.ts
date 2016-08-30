import { Component } from '@angular/core';
import { CORE_DIRECTIVES,NgFor } from '@angular/common';
import { Http, Headers } from '@angular/http';
import {SingleQesUploadService} from './sqes.service';
import {TimepickerComponent} from 'ng2-bootstrap/ng2-bootstrap';
require("../../../../assets/script/papaparse.min.js");

export class Hero {
  options:String[]=[];
  question:String;
}

@Component({
  selector: 'squs-upload',
  providers:[SingleQesUploadService],
  directives: [ CORE_DIRECTIVES,TimepickerComponent ],
  templateUrl: './client_side/app/admin_dashboard/single_question_upload/squs.html',
  styleUrls:['./client_side/app/admin_dashboard/single_question_upload/squs.css'] 
})

export class SingleQueUploadComponent {
     
     constructor(private sq:SingleQesUploadService){
      
     }
   
    private qhid:boolean=true;
    no_of_opts:Number[]=[1];
    hero:Hero={
      question:"",
      options:[""]
    };
     jsonArr = [];
     date:Date=new Date();
     time:String;
    
     num:Number=1;
     createRange(){
        if(this.num<6){
         this.no_of_opts= [];
         for(var i = 1; i <= (this.num); i++){
         this.no_of_opts.push(i);
         }
        } 
     }
    sunmitf(){
        this.hero.options.shift();
        
        console.log(JSON.stringify(this.hero));
        JSON.stringify
        
        this.sq.upload(this.hero).subscribe(
        response => {

        },
        error => {
         
          console.log(error);
        }
      );


        }

       
onChange(event) {
    var file = event.target.files[0];
 
    var filename=file.name.split('.');
    console.log(filename);
   Papa.parse(file, {
  	complete: function(results) {
		console.log("Finished:", results.data[1]);
	     }
    });

  } 


  
       
       
  
       
        
    }


  

