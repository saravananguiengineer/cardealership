import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarsAppRoutes } from './app.routes';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list.component';
import {CarDetailComponent} from './car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    CarsListComponent,
   ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(
      CarsAppRoutes // <-- debugging purposes only
    )
    // other imports here
  ],
   bootstrap: [AppComponent]

})
export class AppModule { }
