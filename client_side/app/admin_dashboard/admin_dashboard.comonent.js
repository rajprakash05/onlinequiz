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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var sharedservice_1 = require('../sharedservice');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(router, http, authHttp, s) {
        this.router = router;
        this.http = http;
        this.authHttp = authHttp;
        this.s = s;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.snav_w = '60px';
        this.btnflag = true;
        this.contentwrap = "60px";
        s.condition = false;
        this.token = localStorage.getItem('id_token');
    }
    AdminDashboardComponent.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('loggedin');
        localStorage.removeItem('user_type');
        this.router.navigate(['/login']);
    };
    AdminDashboardComponent.prototype.snav_open = function () {
        this.snav_w = '60px';
        this.btnflag = true;
        this.contentwrap = "60px";
        console.log(this.btnflag);
    };
    AdminDashboardComponent.prototype.closeNav = function () {
        this.snav_w = '0px';
        this.btnflag = false;
        this.contentwrap = "0px";
        console.log(this.btnflag);
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            selector: 'admin-dashboard',
            directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.TooltipContainerComponent, ng2_bootstrap_1.TooltipDirective],
            templateUrl: './client_side/app/admin_dashboard/admin_dashboard.html',
            styleUrls: ['./client_side/app/admin_dashboard/admin_dashboard.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, angular2_jwt_1.AuthHttp, sharedservice_1.sharedService])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;
//# sourceMappingURL=admin_dashboard.comonent.js.map