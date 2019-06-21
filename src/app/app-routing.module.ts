import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: AppComponent, data: {label: 'Index'}},
  { path: 'about', component: AboutComponent, data: { label: 'About' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

const routeOptions: ExtraOptions = {
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
