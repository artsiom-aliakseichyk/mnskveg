import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppHeader } from "./header/header.component";
import { AppFooter } from "./footer/footer.component";

@Component({
    directives: [ROUTER_DIRECTIVES, AppHeader, AppFooter],
    selector: "app",
    template: `
    	<main class="container-fluid">
    		<app-header></app-header>
    		<section class="container">
    			<a [routerLink]="['/']" class="item">Home</a>
				<a [routerLink]="['/about']" class="item">about</a>
                <a [routerLink]="['/misc']" class="item">Misc</a>
				<router-outlet></router-outlet>
    		</section>
      	</main>
      	<app-footer></app-footer>`

})
export class AppComponent { }
