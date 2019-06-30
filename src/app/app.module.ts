import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { CustomMaterialModule } from './shared/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
//
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
//
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		NavigationComponent,
		PageNotFoundComponent,
		ProductListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CustomMaterialModule,
		FlexLayoutModule
	],
	providers: [
		{
			provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
			useValue: {
				duration: 2000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
				panelClass: 'snackBarInfo'
			}
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
