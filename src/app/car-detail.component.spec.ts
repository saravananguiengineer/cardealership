import { TestBed, async } from '@angular/core/testing';
import { CarDetailComponent } from './car-detail.component';
import { RouterModule, Router } from '@angular/router';
import { CarsService } from './cars.service';
import {
    RouterTestingModule
} from '@angular/router/testing';
describe('CarDetailComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CarDetailComponent], imports: [RouterTestingModule], providers: [CarsService]
        }).compileComponents();
    });
    it('should create the car details component', async(() => {
        const fixture = TestBed.createComponent(CarDetailComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});