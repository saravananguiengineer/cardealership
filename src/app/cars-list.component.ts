import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CarsService } from './cars.service';
import { Cars } from './cars-model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cars-list',
  template: `
          <div class="container">
            <div class="row"><h1>{{heading}}</h1></div>
        <div class="row">
              <div class="col-sm-3 green">
                <a><img src="assets/car1.png" alt="Smiley face" height="48" width="48"></a>
              </div>
              <div class="col-sm-3 red">
                <a><img src="assets/car3.png" alt="Smiley face" height="48" width="48"></a>
              </div>
              <div class="col-sm-3 othercar">
                <a><img src="assets/car2.png" alt="Smiley face" height="48" width="48"></a>
              </div>
          </div>
        <br/>

  <div class="row headingcls hidden-xs">
      <div class="col-sm-3">
       Asset
    </div>
    <div class="col-sm-3">
      Serial Number
    </div>
    <div class="col-sm-3">
       Vehicle Ttype
    </div>
    <div class="col-sm-3">
       Fuel Level
    </div>
  </div>
  <div class="row" *ngFor="let car of cars" [routerLink]="['/car',  car.id ]">
      <div class="col-sm-3">
       <img src="{{car.carimage}}" alt="Smiley face" height="48" width="48">
    </div>
    <div class="col-sm-3">
      {{car.carmake}}
    </div>
    <div class="col-sm-3">
       {{car.cartype}}
    </div>
    <div class="col-sm-3">
       {{car.fuellevel}}
    </div>
</div>
     </div>
  `
})
export class CarsListComponent implements OnInit {
  heading = 'Dealership';
  cars: Cars[];
  constructor(private carService: CarsService) {

  }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

}