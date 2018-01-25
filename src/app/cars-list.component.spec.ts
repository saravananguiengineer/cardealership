import { TestBed, async } from '@angular/core/testing';
import { CarsListComponent } from './cars-list.component';
import { RouterModule, Router } from '@angular/router';
import { CarsService } from './cars.service';
import {
    RouterTestingModule
} from '@angular/router/testing';
describe('CarsListComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CarsListComponent], imports: [RouterTestingModule], providers: [CarsService]
        }).compileComponents();
    });
    it('should create the car list component', async(() => {
        const fixture = TestBed.createComponent(CarsListComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});