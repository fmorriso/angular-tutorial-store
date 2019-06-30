import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
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
	readonly snackbarConfig: MatSnackBarConfig = {duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'};
	constructor(private _snackbar: MatSnackBar) {}

	ngOnInit() {
		this.products = data;
		console.log(JSON.stringify(this.products));
		this._snackbar.open('product list loaded', 'ngOnInit', this.snackbarConfig);
	}

	share() {
		window.alert('The product has been shared!');
	}
}
