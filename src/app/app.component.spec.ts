import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
    RouterTestingModule
} from '@angular/router/testing';
describe('AppComponent', () => {

  beforeEach(() => {
     TestBed.configureTestingModule({ declarations: [ AppComponent ], imports: [ RouterTestingModule ]
     }).compileComponents();
  });
  it('should create the root component which act as a container for others', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});

