import { provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { Type } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MiscComponent } from './components/miscellaneous/misc.component';

const routes: RouterConfig = [
	{ path: '', component: <Type>HomeComponent, terminal: true },
    { path: 'about', component: <Type>AboutComponent, terminal: true },
    { path: 'misc', component: <Type>MiscComponent, terminal: true }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];