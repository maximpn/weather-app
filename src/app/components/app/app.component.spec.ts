import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Event, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  const routerEvents = new Subject<Event>();

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: Router, useValue: { events: routerEvents } },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(AppComponent);

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render the component with the loader', () => {
    routerEvents.next(new NavigationStart(1, 'some/url'));

    fixture.detectChanges();

    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
