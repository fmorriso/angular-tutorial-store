import { Component, OnInit } from '@angular/core';
//
import { products as data } from './products';
import { Product } from './product';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	private products;
	constructor() {}

	ngOnInit() {
		this.products = data;
		console.log(JSON.stringify(this.products));
	}

	share() {
		window.alert('The product has been shared!');
	}
}
