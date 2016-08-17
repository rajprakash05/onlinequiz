import 'core-js/client/shim.min.js';
import 'reflect-metadata';
import 'zone.js/dist/zone'; 
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {enableProdMode} from '@angular/core';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app.routes';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';
import { sharedService } from './sharedservice';
import { ROUTER_DIRECTIVES,provideRouter,RouterConfig} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import 'rxjs/Rx';

enableProdMode();

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(),HTTP_PROVIDERS, appRouterProviders,{provide: LocationStrategy, useClass: HashLocationStrategy},  AUTH_PROVIDERS,
    AuthGuard,sharedService] );
