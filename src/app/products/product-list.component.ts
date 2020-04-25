import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
//
import { products as productData } from './products';
import { Product } from './product';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	private productsList;
	constructor(private snackbar: MatSnackBar) {}

	ngOnInit() {
		this.productsList = productData;
		// console.log(JSON.stringify(this.products));
		const defaults: MatSnackBarConfig = MAT_SNACK_BAR_DEFAULT_OPTIONS as MatSnackBarConfig;
		// defaults.panelClass = 'snackBarInfo';
		this.snackbar.open('product list loaded', 'ngOnInit', defaults);
		console.log(defaults);
	}

	share() {
		this.snackbar.open('The product has been shared!', 'share');
	}

	get products(): Product[] {
		return this.productsList;
	}
}
