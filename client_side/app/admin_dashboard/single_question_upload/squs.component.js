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
        this.wrongAns = [];
    }
    return SQuestions;
}());
exports.SQuestions = SQuestions;
var SingleQueUploadComponent = (function () {
    function SingleQueUploadComponent(sq) {
        this.sq = sq;
        this.Categories = ['Engineering', 'Science', 'Maths'];
        this.qupload = ['typing manually', 'Upload a file'];
        this.dificulty = ['Low', 'Medium', 'High'];
        this.category = '0';
        this.typeofupload = "0";
        this.dificulty_level = "0";
        //datepicker option
        this.datepickerOpts = {
            startDate: new Date(),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'D, d MM yyyy'
        };
        //flags
        this.showexam = true;
        this.showfileupload = false;
        this.showmanuvaltype = false;
        this.subm = true;
        this.squestons = {
            wrongAns: [""],
            question: "",
            correctAns: '',
            imgurl: '',
            videourl: '',
            qtype: ''
        };
        //single_question_upload
        this.showQusblock = true;
        this.showtypemc = false;
        this.showtypetf = false;
        this.hasimg = false;
        this.hasvideo = false;
        this.no_of_opts = [];
        this.num = 0;
        //end
        this.qes = [];
        //dropdown
        this.disabled = false;
        this.status = { isopen: false };
    }
    SingleQueUploadComponent.prototype.change = function () {
        this.time1 = this.time;
    };
    //onsubmit exam creation
    SingleQueUploadComponent.prototype.onSubmit = function () {
        this.subm = false;
        if (this.exam_name && this.typeofupload != '0')
            if (this.typeofupload === "Upload a file") {
                this.showexam = false;
                this.showfileupload = true;
            }
        if (this.typeofupload === "typing manually") {
            this.showexam = false;
            this.showmanuvaltype = true;
        }
    };
    SingleQueUploadComponent.prototype.add = function () {
        this.num++;
        this.createRange();
    };
    SingleQueUploadComponent.prototype.sub = function () {
        this.num--;
        this.createRange();
    };
    SingleQueUploadComponent.prototype.showmc = function () {
        this.showtypemc = true;
        this.showQusblock = false;
        this.squestons["qtype"] = "mc";
    };
    SingleQueUploadComponent.prototype.showtrueorfalse = function () {
        this.showQusblock = false;
        this.showtypetf = true;
    };
    SingleQueUploadComponent.prototype.createRange = function () {
        if (this.num < 6) {
            this.no_of_opts = [];
            for (var i = 1; i <= (this.num); i++) {
                this.no_of_opts.push(i);
            }
        }
    };
    SingleQueUploadComponent.prototype.save = function () {
        this.squestons.wrongAns.shift();
        console.log(this.squestons);
        this.showtypemc = false;
        this.showQusblock = true;
        this.showtypetf = false;
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
    SingleQueUploadComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    SingleQueUploadComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    SingleQueUploadComponent = __decorate([
        core_1.Component({
            selector: 'squs-upload',
            providers: [sqes_service_1.SingleQesUploadService],
            directives: [common_1.CORE_DIRECTIVES, ng2_bootstrap_1.TimepickerComponent, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.NgIf, ng2_datetime_1.NKDatetime],
            templateUrl: './client_side/app/admin_dashboard/single_question_upload/squs.html',
            styleUrls: ['./client_side/app/admin_dashboard/single_question_upload/squs.css']
        }), 
        __metadata('design:paramtypes', [sqes_service_1.SingleQesUploadService])
    ], SingleQueUploadComponent);
    return SingleQueUploadComponent;
}());
exports.SingleQueUploadComponent = SingleQueUploadComponent;
//# sourceMappingURL=squs.component.js.map