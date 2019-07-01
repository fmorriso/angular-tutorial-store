import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
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
	constructor(private _snackbar: MatSnackBar) {}

	ngOnInit() {
		this.products = data;
		// console.log(JSON.stringify(this.products));
		let defaults: MatSnackBarConfig = MAT_SNACK_BAR_DEFAULT_OPTIONS as MatSnackBarConfig;
		//defaults.panelClass = 'snackBarInfo';
		this._snackbar.open('product list loaded', 'ngOnInit', defaults);
		console.log(defaults);
	}

	share() {
		this._snackbar.open('The product has been shared!', 'share');
	}
}
