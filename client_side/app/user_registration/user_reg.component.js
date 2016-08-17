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
var user_reg_service_1 = require('./user_reg.service');
var datepicker_1 = require('./datepicker');
var router_1 = require('@angular/router');
var sharedservice_1 = require('../sharedservice');
var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(rr, builder, s) {
        this.rr = rr;
        this.builder = builder;
        this.s = s;
        this.submitted = false;
        this.events = [];
        this.showForm = true;
        this.date = '';
        this.area = ['Doha', 'Test'];
        s.condition = true;
        s.login = false;
        s.signup = true;
        this.myForm = this.builder.group({
            Name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            Email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")])],
            //Dob: ['', [<any>Validators.required]],
            Sex: ['', [forms_1.Validators.required]],
            Work: ['', [forms_1.Validators.required]],
            Area: ['0', [forms_1.Validators.required]],
            C_Area: ['0', [forms_1.Validators.required]],
            Reference: ['', [forms_1.Validators.required]],
            Phone_No1: ['', [forms_1.Validators.required]],
            Phone_No2: ['', [forms_1.Validators.required]],
            Skill: ['', [forms_1.Validators.required]]
        });
        this.subcribeToFormChanges();
    }
    UserRegistrationComponent.prototype.subcribeToFormChanges = function () {
        var _this = this;
        var myFormStatusChanges$ = this.myForm.statusChanges;
        var myFormValueChanges$ = this.myForm.valueChanges;
        myFormStatusChanges$.subscribe(function (x) { return _this.events.push({ event: 'STATUS_CHANGED', object: x }); });
        myFormValueChanges$.subscribe(function (x) { return _this.events.push({ event: 'VALUE_CHANGED', object: x }); });
    };
    UserRegistrationComponent.prototype.onSubmit = function (model, isValid) {
        var _this = this;
        console.log(model);
        this.guser = model;
        this.guser.Dob = this.date;
        var user = JSON.stringify(model);
        if (isValid) {
            console.log(user);
            this.rr.registerUser(user).subscribe(function (data) { return _this.message = data.flag; }, // put the data returned from the server in our variable
            function (// put the data returned from the server in our variable
                error) { return console.log("Error HTTP Post Service"); }, // in case of failure show this message
            function () { return console.log("Job Done Post !"); } //run this code in all cases
             //run this code in all cases
            );
            this.showForm = false;
        }
        else {
            this.submitted = true;
        }
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'register-user',
            providers: [user_reg_service_1.UserRegistrationService],
            directives: [common_1.CORE_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, common_1.NgIf, router_1.ROUTER_DIRECTIVES, datepicker_1.DatePicker, common_1.NgModel],
            templateUrl: './client_side/app/user_registration/user.html',
            styleUrls: ['client_side/app/user_registration/user_reg.component.css']
        }), 
        __metadata('design:paramtypes', [user_reg_service_1.UserRegistrationService, forms_1.FormBuilder, sharedservice_1.sharedService])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=user_reg.component.js.map