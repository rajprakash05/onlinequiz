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
var header_1 = require('../common/header');
var AdminLoginService = (function () {
    function AdminLoginService(http) {
        this.API_URL = 'http://' + lib_1.domain_name + '/admin_login';
        this.http = http;
    }
    AdminLoginService.prototype.login = function (cred) {
        var options = new http_1.RequestOptions({ headers: header_1.contentHeaders, method: "post" });
        var result = this.http.post(this.API_URL, cred, options)
            .catch(this.handleError);
        return result;
    };
    AdminLoginService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || ' error');
    };
    AdminLoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdminLoginService);
    return AdminLoginService;
}());
exports.AdminLoginService = AdminLoginService;
//# sourceMappingURL=admin_login.service.js.map