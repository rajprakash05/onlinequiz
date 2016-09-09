"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var sqes_service_1 = require('./sqes.service');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_datetime_1 = require('ng2-datetime/ng2-datetime');
require("../../../../assets/script/papaparse.min.js");
var Questions = (function () {
    function Questions(q, ca, wr) {
        this.wrongAns = [];
        this.question = q;
        this.correctAns = ca;
        this.wrongAns = wr;
    }
    return Questions;
}());
exports.Questions = Questions;
var SQuestions = (function () {
    function SQuestions() {
    }
    return SQuestions;
}());
exports.SQuestions = SQuestions;
var SingleQueUploadComponent = (function () {
    function SingleQueUploadComponent(sq) {
        this.sq = sq;
        this.Categories = ['Engineering', 'Science', 'Maths'];
        this.Sub_Categories = ['humanbody', 'test2', 'test3'];
        this.qupload = ['typing manually', 'Upload a file'];
        this.dificulty = ['Low', 'Medium', 'High'];
        //exam name and categories
        this.typeofupload = "0";
        //flags
        this.showexam = true;
        this.showfileupload = false;
        this.showmanuvaltype = false;
        this.subm = true;
        this.squestons = {
            wrongAns1: "",
            wrongAns2: "",
            wrongAns3: "",
            question: "",
            correctAns: '',
            imgurl: '',
            videourl: '',
            qtype: '',
            category: '0',
            sub_category: '0',
            dificulty_level: '0'
        };
        //single_question_upload
        //validation cla
        this.Qsave = false;
        this.Q_flag = false;
        this.Img_flag = false;
        this.Vd_flag = false;
        //end
        this.showQusblock = true;
        this.showtypemc = false;
        this.showtypetf = false;
        this.hasimg = false;
        this.hasvideo = false;
        this.no_of_opts = [];
        this.num = 0;
        /* add_category     */
        this.add_cate = false;
        /* add_category  End   */
        /* add_Sub_category  Start  */
        this.add_sub_cate = false;
        //end
        this.qes = [];
    }
    //onsubmit exam creation
    SingleQueUploadComponent.prototype.onSubmit = function () {
        this.subm = false;
        if (this.typeofupload != '0')
            if (this.typeofupload === "Upload a file") {
                this.showexam = false;
                this.showfileupload = true;
            }
        if (this.typeofupload === "typing manually") {
            this.showexam = false;
            this.showmanuvaltype = true;
        }
    };
    SingleQueUploadComponent.prototype.validate_fn = function () {
        if (this.squestons.question.length == 0 && this.Qsave) {
            this.Q_flag = true;
        }
        else {
            this.Q_flag = false;
        }
        if (this.squestons.imgurl.length <= 6 && this.Qsave) {
            this.Img_flag = true;
        }
        else {
            this.Img_flag = false;
        }
    };
    SingleQueUploadComponent.prototype.showmc = function () {
        this.showtypemc = true;
        this.showQusblock = false;
        this.squestons = {
            wrongAns1: "",
            wrongAns2: "",
            wrongAns3: "",
            question: "",
            correctAns: '',
            imgurl: '',
            videourl: '',
            qtype: 'mc',
            category: '0',
            sub_category: '0',
            dificulty_level: '0'
        };
    };
    SingleQueUploadComponent.prototype.showtrueorfalse = function () {
        this.showQusblock = false;
        this.showtypetf = true;
        this.squestons = {
            wrongAns1: "",
            wrongAns2: "",
            wrongAns3: "",
            question: "",
            correctAns: '',
            imgurl: '',
            videourl: '',
            qtype: 'true_or_false',
            category: '0',
            sub_category: '0',
            dificulty_level: '0'
        };
    };
    SingleQueUploadComponent.prototype.show_category = function () {
        if (this.squestons.category === "add") {
            this.add_cate = true;
            this.squestons['category'] = '0';
        }
        else {
            this.add_cate = false;
        }
    };
    SingleQueUploadComponent.prototype.add_category = function () {
        console.log("ad" + this.Acategory);
        if (this.Acategory) {
            this.Categories.push(this.Acategory);
            this.squestons['category'] = this.Acategory;
            this.Acategory = "";
            this.add_cate = false;
        }
        else {
            this.squestons['category'] = '0';
        }
    };
    SingleQueUploadComponent.prototype.show_sub_category = function () {
        if (this.squestons.sub_category === "add") {
            this.add_sub_cate = true;
            this.squestons['sub_category'] = '0';
        }
        else {
            this.add_sub_cate = false;
        }
    };
    SingleQueUploadComponent.prototype.add_sub_category = function () {
        if (this.A_sub_category) {
            this.Sub_Categories.push(this.A_sub_category);
            this.squestons['sub_category'] = this.A_sub_category;
            this.A_sub_category = "";
            this.add_sub_cate = false;
        }
        else {
            this.squestons['sub_category'] = '0';
        }
    };
    /* add_category  End   */
    SingleQueUploadComponent.prototype.save = function () {
        this.Qsave = true;
        this.validate_fn();
        console.log(this.squestons);
        /*  this.showtypemc=false;
          this.showQusblock=true;
          this.showtypetf=false; */
    };
    SingleQueUploadComponent.prototype.onChange = function (event) {
        var file = event.target.files[0];
        this.filename = file.name;
        var questons = [];
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
    };
    SingleQueUploadComponent = __decorate([
        core_1.Component({
            selector: 'squs-upload',
            providers: [sqes_service_1.SingleQesUploadService],
            directives: [common_1.CORE_DIRECTIVES, ng2_bootstrap_1.TimepickerComponent, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.NgIf, ng2_datetime_1.NKDatetime, ng2_bootstrap_1.TOOLTIP_DIRECTIVES,],
            templateUrl: './client_side/app/admin_dashboard/single_question_upload/squs.html',
            styleUrls: ['./client_side/app/admin_dashboard/single_question_upload/squs.css']
        }), 
        __metadata('design:paramtypes', [sqes_service_1.SingleQesUploadService])
    ], SingleQueUploadComponent);
    return SingleQueUploadComponent;
}());
exports.SingleQueUploadComponent = SingleQueUploadComponent;
//# sourceMappingURL=squs.component.js.map