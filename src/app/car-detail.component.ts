import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from './cars.service';
import { Route, RouterModule, NavigationStart, NavigationEnd, NavigationError, Event as NavigationEvent, Router } from '@angular/router';

@Component({
  selector: 'cars-detail',
  template:
  `<div id="carDetailpage" class="container">
  <h4>{{car.serialnumber}}</h4>
    <div class="col-sm-4">
      <img src="{{car.carimage}}" alt="Smiley face" height="42" width="42" >
      <table class="table-responsive">
        <tr>
          <td>Service Due :</td>
          <td>{{car.serviceDue}}</td> 
        </tr>
        <tr>
          <td>GpsID Due :</td>
          <td>{{car.gpsid}}</td> 
        </tr>
          <tr>
          <td>Nof drivers :</td>
          <td>{{car.noofdrivers}}</td> 
        </tr>
        <tr>
          <td>Vehicle Owner : </td>
          <td>{{car.vehicleowner}}</td> 
        </tr>
        <tr>
          <td>Charge Per Hour : </td>
          <td>{{car.chargeperhour}}</td> 
        </tr>
        <tr>
          <td>Parking Garage :</td>
          <td>{{car.parkinggarage}}</td> 
        </tr>
      </table>
    </div>
  <div class="col-sm-4">
        <table class="table-responsive">
        <tr>
          <td>SapId :</td>
          <td>{{car.sapid}}</td> 
        </tr>
        <tr>
          <td>Car Make :</td>
          <td>{{car.carmake}}</td> 
        </tr>
          <tr>
          <td>Legacy ID :</td>
          <td>{{car.legacyid}}</td> 
        </tr>
        <tr>
          <td>Vehicle Owner : </td>
          <td>{{car.vehicleowner}}</td> 
        </tr>
        <tr>
          <td>Transmition : </td>
          <td>{{car.transmition}}</td> 
        </tr>
        <tr>
          <td>Number Plate :</td>
          <td>{{car.numberplate}}</td> 
        </tr>
        <tr>
          <td>Fuel Cost :</td>
          <td>{{car.fuelcost}}</td> 
        </tr>
        <tr>
          <td>Labor Cost :</td>
          <td>{{car.laborcost}}</td> 
        </tr>
      </table>
  </div>
    <div class="col-sm-4">
        <table class="table-responsive">
        <tr>
          <td>Car Type :</td>
          <td>{{car.cartype}}</td> 
        </tr>
        <tr>
          <td>Car Year :</td>
          <td>{{car.year}}</td> 
        </tr>
        <tr>
          <td>Last reported :</td>
          <td>{{car.lastreported}}</td> 
        </tr>
        <tr>
          <td>Odometer :</td>
          <td>{{car.odometer}}</td> 
        </tr>
          <tr>
          <td>Tirepressure :</td>
          <td>{{car.tirepressure}}</td> 
        </tr>
        <tr>
          <td>Ideal Hours :</td>
          <td>{{car.idealhours}}</td> 
        </tr>
          <tr>
          <td>Used Hours :</td>
          <td>{{car.usedhours}}</td> 
        </tr>
        </table>
  </div>
  </div>
    <br/>
    <div class="container">
       <a href="#" class="btn btn-info" role="button" [routerLink]="['/']">Back to home</a>
  </div>
  `

})
export class CarDetailComponent implements OnInit {
  car: any;
  constructor(private CarsService: CarsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.car = this.CarsService.getCar(this.route.snapshot.params.id);
  }

}