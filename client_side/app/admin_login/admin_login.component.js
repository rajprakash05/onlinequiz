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
var admin_login_service_1 = require('./admin_login.service');
var sharedservice_1 = require('../sharedservice');
var angular2_jwt_1 = require('angular2-jwt');
var AdminLoginComponent = (function () {
    function AdminLoginComponent(rr, builder, router, s) {
        this.rr = rr;
        this.builder = builder;
        this.router = router;
        this.s = s;
        this.events = [];
        this.showerr = true;
        this.showser_err = true;
        this.loginForm = this.builder.group({
            Username: ['', [common_1.Validators.required]],
            Password: ['', [common_1.Validators.required]]
        });
        if (angular2_jwt_1.tokenNotExpired()) {
            s.condition = false;
            this.router.navigate(['/admin_dashboard']);
        }
        else {
            s.condition = true;
            s.login = true;
            s.signup = true;
        }
    }
    AdminLoginComponent.prototype.login = function (c, isValid) {
        var _this = this;
        if (isValid) {
            this.showerr = true;
            this.rr.login(c).subscribe(function (response) {
                localStorage.setItem('id_token', response.json().id_token);
                localStorage.setItem('loggedin', response.json().loggedin);
                localStorage.setItem('user_type', response.json().user_type);
                _this.dat = response.json().loggedin;
                _this.router.navigate(['/admin_dashboard']);
            }, function (error) {
                _this.showser_err = false;
                console.log(error);
            });
        }
        else {
            this.showerr = false;
        }
    };
    AdminLoginComponent = __decorate([
        core_1.Component({
            selector: 'admin-login',
            providers: [admin_login_service_1.AdminLoginService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            templateUrl: './client_side/app/admin_login/admin_login.html',
            styleUrls: ['client_side/app/admin_login/admin_login.css']
        }), 
        __metadata('design:paramtypes', [admin_login_service_1.AdminLoginService, forms_1.FormBuilder, router_1.Router, sharedservice_1.sharedService])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());
exports.AdminLoginComponent = AdminLoginComponent;
//# sourceMappingURL=admin_login.component.js.map