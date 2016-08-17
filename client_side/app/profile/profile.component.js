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
var template = './client_side/app/profile/profile.component.html';
var ProfileComponent = (function () {
    function ProfileComponent(router, http, authHttp, s) {
        this.router = router;
        this.http = http;
        this.authHttp = authHttp;
        this.s = s;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        s.condition = false;
        this.token = localStorage.getItem('id_token');
    }
    ProfileComponent.prototype.logout = function () {
        localStorage.removeItem('id_token');
        this.router.navigate(['/login']);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            directives: [common_1.CORE_DIRECTIVES],
            templateUrl: './client_side/app/profile/profile.html',
            styles: ['./client_side/app/profile/profile.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, angular2_jwt_1.AuthHttp, sharedservice_1.sharedService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map