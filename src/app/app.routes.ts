import { CarsListComponent } from './cars-list.component';
import { CarDetailComponent } from './car-detail.component';

export const CarsAppRoutes = [
  { path: '', component: CarsListComponent },
  { path: 'car/:id', component: CarDetailComponent }
]