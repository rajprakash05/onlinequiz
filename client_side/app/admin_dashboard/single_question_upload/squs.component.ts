import { Component,Pipe,PipeTransform } from '@angular/core';
import { CORE_DIRECTIVES,NgFor,NgIf } from '@angular/common';
import { Http, Headers } from '@angular/http';
import {SingleQesUploadService} from './sqes.service';
import {TimepickerComponent,DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
require("../../../../assets/script/papaparse.min.js");


export class Questions {
  wrongAns:String[]=[];
  question:String;
  correctAns:String;
  constructor(q:String,ca:String,wr:String[]){
    this.question=q;
    this.correctAns=ca;
    this.wrongAns=wr;
  }
}

export /**
 * name
 */
class SQuestions {
  wrongAns:String[]=[];
  question:String;
  correctAns:String;
  imgurl:string;
  videourl:string;
  qtype:string;
  
}


@Component({
  selector: 'squs-upload',
  providers:[SingleQesUploadService],
  directives: [ CORE_DIRECTIVES,TimepickerComponent,DROPDOWN_DIRECTIVES,NgIf,NKDatetime ],
  templateUrl: './client_side/app/admin_dashboard/single_question_upload/squs.html',
  styleUrls:['./client_side/app/admin_dashboard/single_question_upload/squs.css'] 
})

export class SingleQueUploadComponent {
     
     constructor(private sq:SingleQesUploadService){
      
     }
   Categories = ['Engineering','Science','Maths'];
   qupload=['typing manually','Upload a file'];
   dificulty=['Low','Medium','High'];

   //exam name and categories
  exam_name:string;
  category:string='0';
  typeofupload:string="0";
  dificulty_level:string="0";
  date:Date;
  time:Date;
  //datepicker option
   datepickerOpts: any = {
        startDate: new Date(),
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: true,
        format: 'D, d MM yyyy'
    };
    time1:Date;
    change(){
      this.time1=this.time;
    }
  //flags
  showexam:boolean=true;
  showfileupload:boolean=false;
  showmanuvaltype:boolean=false;
  subm:boolean=true;

  //filename
  filename:string;
  test:any;

  //onsubmit exam creation

  onSubmit(){
    this.subm=false;
    if(this.exam_name && this.typeofupload != '0')
     if(this.typeofupload==="Upload a file"){
       this.showexam=false;
       this.showfileupload=true;
     }
     if(this.typeofupload==="typing manually"){
       this.showexam=false;
       this.showmanuvaltype=true;
     }


  }

  squestons:SQuestions={
  wrongAns:[""],
  question:"",
  correctAns:'',
  imgurl:'',
  videourl:'',
  qtype:''

  }; 

  //single_question_upload
  showQusblock:boolean=true;
  showtypemc:boolean=false; 
  showtypetf:boolean=false;
  hasimg:boolean=false;
  hasvideo:boolean=false;
  no_of_opts:Number[]=[];
 num:any=0;
 add(){
  this.num++;
  this.createRange();
 
   }
   sub(){
      this.num--;
  this.createRange();
   }
   showmc(){
     this.showtypemc=true;
     this.showQusblock=false;
     this.squestons["qtype"]="mc";


   }
   showtrueorfalse(){
      this.showQusblock=false;
      this.showtypetf=true;
   }
     createRange(){
        if(this.num<6){
         this.no_of_opts= [];
         for(var i = 1; i <= (this.num); i++){
         this.no_of_opts.push(i);
         }
        } 
     }

     save(){
       this.squestons.wrongAns.shift();
       console.log(this.squestons);
       this.showtypemc=false;
       this.showQusblock=true;
       this.showtypetf=false;
       
     }
     //end

  qes:Questions[] = [];
        
onChange(event) {
    var file = event.target.files[0];
    this.filename=file.name;
    var questons: Questions[] = [];
  /*  Papa.parse(file, {
  	complete: function(results) {
      for(var i=0,j=0;i<results.data.length;i++){
      // this.questons.push({'question':results.data[i][j],'correctAns':results.data[i][j+1]}); 
       var  tem:String[]=[];
      
       for(var k=2;k<results.data[i].length;k++){
        // this.questons.push({'wrongAns[]':results.data[i][j]});
        tem.push(results.data[i][k]);
       }

      questons.push(
         new Questions(results.data[i][j],results.data[i][j+1],tem)); 
        

      }
    console.log(JSON.stringify(questons));
     this.qes=questons;
     

	     }
    }); 

	     }*/

     
       

     
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
   
   
    
    }


  

