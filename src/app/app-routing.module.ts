import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { label: 'Home' } },
  { path: 'products', component: ProductListComponent, data: { label: 'Products' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, data: { label: 'About' } },
  { path: '**', component: PageNotFoundComponent },
];

const routeOptions: ExtraOptions = {
  enableTracing: false,
  relativeLinkResolution: 'legacy',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
