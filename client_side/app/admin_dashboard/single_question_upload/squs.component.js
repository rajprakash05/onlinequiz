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
var Hero = (function () {
    function Hero() {
        this.options = [];
    }
    return Hero;
}());
exports.Hero = Hero;
var SingleQueUploadComponent = (function () {
    function SingleQueUploadComponent(sq) {
        this.sq = sq;
        this.no_of_opts = [1];
        this.hero = {
            question: "",
            options: [""]
        };
        this.jsonArr = [];
        this.date = new Date();
        this.num = 1;
    }
    SingleQueUploadComponent.prototype.createRange = function () {
        if (this.num < 6) {
            this.no_of_opts = [];
            for (var i = 1; i <= (this.num); i++) {
                this.no_of_opts.push(i);
            }
        }
    };
    SingleQueUploadComponent.prototype.sunmitf = function () {
        this.hero.options.shift();
        console.log(JSON.stringify(this.hero));
        JSON.stringify;
        this.sq.upload(this.hero).subscribe(function (response) {
        }, function (error) {
            console.log(error);
        });
    };
    SingleQueUploadComponent = __decorate([
        core_1.Component({
            selector: 'squs-upload',
            providers: [sqes_service_1.SingleQesUploadService],
            directives: [common_1.CORE_DIRECTIVES, ng2_bootstrap_1.TimepickerComponent],
            templateUrl: './client_side/app/admin_dashboard/single_question_upload/squs.html',
            styleUrls: ['./client_side/app/admin_dashboard/single_question_upload/squs.css']
        }), 
        __metadata('design:paramtypes', [sqes_service_1.SingleQesUploadService])
    ], SingleQueUploadComponent);
    return SingleQueUploadComponent;
}());
exports.SingleQueUploadComponent = SingleQueUploadComponent;
//# sourceMappingURL=squs.component.js.map