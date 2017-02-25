import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-root',
	providers: [],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	items = [];
	
	constructor (private http: Http) {
		var that = this;
 		http.get('http://ui-base.herokuapp.com/api/items/get')
			.map(function (res) {
				return res.json();
			})
			.subscribe(function (items) {
				that.items = items.slice(0, 100);
 			})
		
	}
}