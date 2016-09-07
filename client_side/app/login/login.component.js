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
var login_service_1 = require('./login.service');
var sharedservice_1 = require('../sharedservice');
var angular2_jwt_1 = require('angular2-jwt');
var LoginComponent = (function () {
    function LoginComponent(rr, builder, router, s) {
        this.rr = rr;
        this.builder = builder;
        this.router = router;
        this.s = s;
        this.events = [];
        this.showerr = true;
        this.showser_err = true;
        this.showform = false;
        this.loginForm = this.builder.group({
            Email: ['', [common_1.Validators.required, common_1.Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]],
            Password: ['', [common_1.Validators.required]]
        });
        if (angular2_jwt_1.tokenNotExpired()) {
            s.condition = false;
            this.showform = false;
            if (localStorage.getItem('user_type') === "admin") {
                this.router.navigate(['/admin_dashboard']);
            }
            else {
                this.router.navigate(['/profile']);
            }
        }
        else {
            this.showform = true;
            s.condition = true;
            s.login = true;
            s.signup = false;
        }
    }
    LoginComponent.prototype.login = function (c, isValid) {
        var _this = this;
        if (isValid) {
            this.showerr = true;
            this.rr.login(c).subscribe(function (response) {
                localStorage.setItem('id_token', response.json().id_token);
                _this.dat = response.json().loggedin;
                _this.router.navigate(['/profile']);
            }, function (error) {
                _this.showser_err = false;
                console.log(error);
            });
        }
        else {
            this.showerr = false;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            providers: [login_service_1.LoginService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            templateUrl: './client_side/app/login/login.component.html',
            styleUrls: ['client_side/app/login/login.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, forms_1.FormBuilder, router_1.Router, sharedservice_1.sharedService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map