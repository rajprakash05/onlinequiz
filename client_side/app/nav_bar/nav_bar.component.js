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
var router_1 = require('@angular/router');
var sharedservice_1 = require('../sharedservice');
var NavBarComponent = (function () {
    function NavBarComponent(s) {
        this.s = s;
        this.nv_bgc = "rgba(34, 34, 34, 0)";
        this.nv_brc = "rgba(8, 8, 8, 0)";
        this.snav_w = '0px';
        this.btnflag = false;
    }
    NavBarComponent.prototype.track = function (event) {
        if (document.body.scrollTop < 40) {
            this.nv_bgc = "rgba(34, 34, 34, 0)";
            this.nv_brc = "rgba(8, 8, 8, 0)";
            console.log("top");
        }
        else {
            this.nv_bgc = "#f9ad04";
            this.nv_brc = "rgba(8, 8, 8, 0)";
            console.log("bot");
        }
        //  console.debug("Scroll Event", document.body.scrollTop);
    };
    NavBarComponent.prototype.snav_open = function () {
        this.snav_w = '250px';
        this.btnflag = true;
        console.log(this.btnflag);
    };
    NavBarComponent.prototype.closeNav = function () {
        this.snav_w = '0px';
        this.btnflag = false;
        console.log(this.btnflag);
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NavBarComponent.prototype, "track", null);
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: './client_side/app/nav_bar/nav_bar.html',
            styleUrls: ['./client_side/app/nav_bar/nav_bar.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, common_1.NgIf]
        }), 
        __metadata('design:paramtypes', [sharedservice_1.sharedService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav_bar.component.js.map