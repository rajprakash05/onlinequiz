"use strict";
var router_1 = require('@angular/router');
var user_reg_component_1 = require('./user_registration/user_reg.component');
var login_component_1 = require('./login/login.component');
var forget_password_component_1 = require('./forget_password/forget_password.component');
var profile_component_1 = require('./profile/profile.component');
var admin_login_component_1 = require('./admin_login/admin_login.component');
var admin_dashboard_comonent_1 = require('./admin_dashboard/admin_dashboard.comonent');
var squs_component_1 = require('./admin_dashboard/single_question_upload/squs.component');
var auth_guard_1 = require('./common/auth.guard');
var routes = [
    {
        path: '', redirectTo: 'login', terminal: true
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'user_reg',
        component: user_reg_component_1.UserRegistrationComponent
    },
    {
        path: 'forget_password',
        component: forget_password_component_1.ForgetPassword
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'admin_login',
        component: admin_login_component_1.AdminLoginComponent,
    },
    {
        path: 'admin_dashboard',
        component: admin_dashboard_comonent_1.AdminDashboardComponent,
        children: [
            { path: '', component: squs_component_1.SingleQueUploadComponent },
            { path: 'single_question_upload', component: squs_component_1.SingleQueUploadComponent }
        ],
        canActivate: [auth_guard_1.AuthGuard]
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map