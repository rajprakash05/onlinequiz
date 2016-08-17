"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var angular2_jwt_1 = require('angular2-jwt');
var auth_guard_1 = require('./common/auth.guard');
var sharedservice_1 = require('./sharedservice');
require('rxjs/Rx');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [forms_1.disableDeprecatedForms(), forms_1.provideForms(), http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders, angular2_jwt_1.AUTH_PROVIDERS,
    auth_guard_1.AuthGuard, sharedservice_1.sharedService]);
//# sourceMappingURL=main.js.map