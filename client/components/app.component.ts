import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    template: `
    	<div class="container">
    		<a [routerLink]="['/']" class="item">Home</a>
			<a [routerLink]="['/about']" class="item">about</a>
      	</div>
      	<router-outlet></router-outlet>`

})
export class AppComponent { }