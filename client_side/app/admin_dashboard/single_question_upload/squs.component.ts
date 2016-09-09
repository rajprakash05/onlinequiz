import { Component,Pipe,PipeTransform,ViewChild } from '@angular/core';
import { CORE_DIRECTIVES,NgFor,NgIf } from '@angular/common';
import { Http, Headers } from '@angular/http';
import {SingleQesUploadService} from './sqes.service';
import {TimepickerComponent,DROPDOWN_DIRECTIVES,TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
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
  wrongAns1:String;
  wrongAns2:String;
  wrongAns3:String;
  question:String;
  correctAns:String;
  imgurl:string;
  videourl:string;
  qtype:string;
  category:string;
  dificulty_level:string;
  sub_category:string;
  
}


@Component({
  selector: 'squs-upload',
  providers:[SingleQesUploadService],
  directives: [ CORE_DIRECTIVES,TimepickerComponent,DROPDOWN_DIRECTIVES,NgIf,NKDatetime,TOOLTIP_DIRECTIVES,],
  templateUrl: './client_side/app/admin_dashboard/single_question_upload/squs.html',
  styleUrls:['./client_side/app/admin_dashboard/single_question_upload/squs.css'] 
})

export class SingleQueUploadComponent {
     
     constructor(private sq:SingleQesUploadService){
      
     }
 
   Categories = ['Engineering','Science','Maths'];
   Sub_Categories = ['humanbody','test2','test3'];
   qupload=['typing manually','Upload a file'];
   dificulty=['Low','Medium','High'];

   //exam name and categories
 
  typeofupload:string="0";

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
    if(this.typeofupload != '0')
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
  wrongAns1:"",
  wrongAns2:"",
  wrongAns3:"",
  question:"",
  correctAns:'',
  imgurl:'',
  videourl:'',
  qtype:'',
  category:'0',
  sub_category:'0',
  dificulty_level:'0'

  }; 

  //single_question_upload
      //validation cla
      Qsave:boolean=false;
      
      
       Q_flag=false;
       Img_flag=false;
       Vd_flag=false;
       validate_fn(){
         if(this.squestons.question.length==0 && this.Qsave){
           this.Q_flag=true;
         }
         else{
          this.Q_flag=false;
         }
          if(this.squestons.imgurl.length<=6 && this.Qsave ){
           this.Img_flag=true;
         }
         else{
          this.Img_flag=false;
         }
         
       }
      
      //end
  showQusblock:boolean=true;
  showtypemc:boolean=false; 
  showtypetf:boolean=false;
  hasimg:boolean=false;
  hasvideo:boolean=false;
  no_of_opts:Number[]=[];
  num:any=0;
 
   showmc(){
     this.showtypemc=true;
     this.showQusblock=false;
      this.squestons={
  wrongAns1:"",
  wrongAns2:"",
  wrongAns3:"",
  question:"",
  correctAns:'',
  imgurl:'',
  videourl:'',
  qtype:'mc',
  category:'0',
  sub_category:'0',
  dificulty_level:'0'

  }; 



   }
   showtrueorfalse(){
      this.showQusblock=false;
      this.showtypetf=true;
          this.squestons={
  wrongAns1:"",
  wrongAns2:"",
  wrongAns3:"",
  question:"",
  correctAns:'',
  imgurl:'',
  videourl:'',
  qtype:'true_or_false',
   category:'0',
  sub_category:'0',
  dificulty_level:'0'

  }; 
   }
   
   /* add_category     */
   add_cate:boolean=false;
   Acategory:string;
     show_category(){
      
       if(this.squestons.category === "add" ){  
       this.add_cate=true;
       this.squestons['category']='0';
       }
       else{
         this.add_cate=false;
       }
     }
     add_category(){
       console.log("ad"+ this.Acategory);
       
       if(this.Acategory){
         this.Categories.push(this.Acategory);
         this.squestons['category']=this.Acategory;
         this.Acategory="";
         this.add_cate=false;
      }
      else{
        this.squestons['category']='0';
      }

     }
        /* add_category  End   */

          /* add_Sub_category  Start  */
             add_sub_cate:boolean=false;
            A_sub_category:string;
     show_sub_category(){
      
       if(this.squestons.sub_category === "add" ){  
       this.add_sub_cate=true;
       this.squestons['sub_category']='0';
       }
       else{
         this.add_sub_cate=false;
       }
     }
     add_sub_category(){
       
       
       if(this.A_sub_category){
         this.Sub_Categories.push(this.A_sub_category);
         this.squestons['sub_category']=this.A_sub_category;
         this.A_sub_category="";
         this.add_sub_cate=false;
      }
      else{
        this.squestons['sub_category']='0';
      }

     }
     /* add_category  End   */

     save(){
       this.Qsave=true;
       this.validate_fn();
     
       console.log(this.squestons);
     /*  this.showtypemc=false;
       this.showQusblock=true;
       this.showtypetf=false; */
       
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





  

