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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var forget_password_service_1 = require('./forget_password.service');
var ForgetPassword = (function () {
    function ForgetPassword(builder, fg) {
        this.builder = builder;
        this.fg = fg;
        this.submitted = false;
        this.showerr = true;
        this.showser_err = true;
        this.useremail = "";
        this.events = [];
        this.bgclr = "#";
        this.bdrclr = "#";
        this.fgForm = this.builder.group({
            Fgemail: ['', [common_1.Validators.required, common_1.Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]]
        });
    }
    ForgetPassword.prototype.fgpwd = function (m, isValid) {
        var _this = this;
        console.log(m);
        if (isValid) {
            this.showerr = true;
            this.fg.reset(m).subscribe(function (data) { return _this.dat = JSON.stringify(data); }, // put the data returned from the server in our variable
            function (// put the data returned from the server in our variable
                error) { return console.log("Error HTTP Post Service"); }, // in case of failure show this message
            function () { return console.log("Job Done Post !"); } //run this code in all cases
             //run this code in all cases
            );
            console.log(this.dat);
            if (false) {
            }
            else {
                this.bgclr = "#rgba(185, 8, 8, 0.57)";
                this.bdrclr = "rgba(185, 8, 8, 0.57)";
                this.useremail = m.Fgemail;
                this.showser_err = false;
            }
        }
        else {
            this.bgclr = "rgba(185, 8, 8, 0.57)";
            this.bdrclr = "rgba(185, 8, 8, 0.57)";
            this.showerr = false;
        }
    };
    ForgetPassword = __decorate([
        core_1.Component({
            selector: 'forget-password',
            providers: [forget_password_service_1.ForgetPasswordService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            templateUrl: './client_side/app/forget_password/forget_password.component.html',
            styleUrls: ['client_side/app/forget_password/forget_password.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, forget_password_service_1.ForgetPasswordService])
    ], ForgetPassword);
    return ForgetPassword;
}());
exports.ForgetPassword = ForgetPassword;
//# sourceMappingURL=forget_password.component.js.map