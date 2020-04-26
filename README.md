# AngularTutorialStore

This project is the Angular Online Store tutorial.

It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3 and subsequently upgraded to Angular 9.

## Angular Tutorial Information

-   [Online Store tutorial](https://angular.io/start)

## Other References

-   [Flex Layout for Angular](https://alligator.io/angular/flex-layout/)
-   [Angular Flex Layout](https://github.com/angular/flex-layout)
-   [Angular Flex Layout + Material StackBlitz](https://stackblitz.com/edit/angular-material-flex-layout-seed?file=app%2Fapp.module.ts)
-   [Angular Material button examples](https://www.angularjswiki.com/angular/buttons-in-angular-using-material-design-mat-button-example/)

## Differences between this project and the official Angular Online Store Tutorial

-   Routing is defined with two Routes:
    1. Home - generic, do-nothing default landing page.
    1. Products - where the main tutorial code is located
    1. About - displays the version information of key software components
-   The `HomeComponent` is where the tutorial code is located, not the `AppComponent`.
-   Angular Material and Angular Flex-Layout are used for styling instead of the styles specified in the official tutorial.
-   Javascript calls to `alert()` are replaced with calls to Angular Material Snackbar with 3-second automatic close.
