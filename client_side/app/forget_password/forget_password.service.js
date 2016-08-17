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
var ForgetPasswordService = (function () {
    function ForgetPasswordService(http) {
        this.API_URL = 'http://104.237.131.101:8081/reset_password';
        this.http = http;
    }
    ForgetPasswordService.prototype.reset = function (email) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        var result = this.http.post(this.API_URL, email, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        console.log("re====" + result);
        return result;
    };
    ForgetPasswordService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || ' error');
    };
    ForgetPasswordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ForgetPasswordService);
    return ForgetPasswordService;
}());
exports.ForgetPasswordService = ForgetPasswordService;
//# sourceMappingURL=forget_password.service.js.map