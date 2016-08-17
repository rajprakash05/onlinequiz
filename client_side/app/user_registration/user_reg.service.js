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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var lib_1 = require('../lib');
var UserRegistrationService = (function () {
    function UserRegistrationService(http) {
        this.API_URL = 'http://' + lib_1.domain_name + '/user_reg';
        this.http = http;
    }
    UserRegistrationService.prototype.registerUser = function (user) {
        //let data = JSON.stringify(user);
        //console.log("Testing post data....."+data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.API_URL, user, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserRegistrationService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || ' error');
    };
    UserRegistrationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserRegistrationService);
    return UserRegistrationService;
}());
exports.UserRegistrationService = UserRegistrationService;
//# sourceMappingURL=user_reg.service.js.map