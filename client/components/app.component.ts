import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppHeader } from "./header/header.component";
import { AppFooter } from "./footer/footer.component";
import { ASpot } from "./a-spot/a-spot.component";
import { AppContentSelection } from "./content-selection/content-selection.component";

//services
import { CuisinesService } from "../services/cuisines.service";

@Component({
    directives: [ROUTER_DIRECTIVES, AppHeader, AppFooter, ASpot, AppContentSelection],
    selector: "app",
    template: `
    	<main class="container-fluid">
    		<app-header></app-header>
            <a-spot></a-spot>
            <app-content-selection></app-content-selection>
            <div>
                <ul>
                    <li *ngFor="let cuisine of cuisines">{{cuisine.name}}</li>
                </ul>
            </div>
    		<section class="container">
    			<a [routerLink]="['/']" class="item">Home</a>
				<a [routerLink]="['/about']" class="item">about</a>
                <a [routerLink]="['/misc']" class="item">Misc</a>
				<router-outlet></router-outlet>
    		</section>
      	</main>
        <footer>
            <app-footer></app-footer>
        </footer>
      	`,
    providers: [CuisinesService]
})
export class AppComponent implements OnInit {
    public cuisines;

    constructor(private cuisinesService: CuisinesService) {}

    getCuisines() {
        this.cuisines = this.cuisinesService.getCuisines();
        console.log(this.cuisines);
    }

    ngOnInit() {
        this.getCuisines();
    }
}
