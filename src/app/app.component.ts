import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list.component';
import { CarDetailComponent } from './car-detail.component';
import { CarsService } from './cars.service';


@Component({
  selector: 'my-app',
  template: ` 

        <router-outlet></router-outlet>
  `,
  providers: [CarsService]
})
export class AppComponent {



}