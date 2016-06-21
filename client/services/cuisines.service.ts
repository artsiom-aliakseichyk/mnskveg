import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class CuisinesService {
	// constructor (private http: Http) {}

	// private getCuisinesURL = "sample.json";

	// getCuisines(){
	// 	return this.http.get(this.getCuisinesURL).
	// 		map((res: Response) => res.json());
	// }
	collection: Array<Object>;
	constructor() {

		this.collection = [
			{
				"name": "some veg name",
				"type": "vegan",
				"price": "***",
				"location": "minsk, kuprevicha"
			},
			{
				"name": "some name",
				"type": "veg-friendly",
				"price": "*****",
				"location": "minsk, nezavisimosti"
			},
			{
				"name": "some vegan name",
				"type": "vegan",
				"price": "**",
				"location": "minsk, bogdanovicha"
			}
		]
	}

	getCuisines() {
		return this.collection;
	}
}