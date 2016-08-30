import { Component } from '@angular/core';
import { CORE_DIRECTIVES,NgFor } from '@angular/common';
import { Http, Headers } from '@angular/http';
import {SingleQesUploadService} from './sqes.service';
import {TimepickerComponent,DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
require("PapaParse-4.1.2/papaparse.js");

export class Hero {
  options:String[]=[];
  question:String;
}

@Component({
  selector: 'squs-upload',
  providers:[SingleQesUploadService],
  directives: [ CORE_DIRECTIVES,TimepickerComponent,DROPDOWN_DIRECTIVES ],
  templateUrl: './client_side/app/admin_dashboard/single_question_upload/squs.html',
  styleUrls:['./client_side/app/admin_dashboard/single_question_upload/squs.css'] 
})

export class SingleQueUploadComponent {
     
     constructor(private sq:SingleQesUploadService){
      
     }
   
   
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
		console.log("Finished:", results.data);
	     }
    });

  } 

  //dropdown
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
 
 
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  //end

  //show question_upload
   private qhid:boolean=true;
   private qup:boolean=true;
  showsq(){

    this.qhid=false;
    this.qup=true;
  }
showfup(){
  this.qhid=true;
    this.qup=false;
}

//end of  question_upload
       
       
  
       
        
    }


  

