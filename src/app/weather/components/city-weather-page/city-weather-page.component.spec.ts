import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TimestampWeather } from '../../models/timestamp-weather.model';

import { CityWeatherPageComponent } from './city-weather-page.component';

@Component({
  selector: 'wa-timestamp-weather',
  template: '{{ weather | json }}',
})
class TimestampWeatherMockComponent {
  @Input()
  weather!: TimestampWeather;
}

describe('CityWeatherPageComponent', () => {
  let fixture: ComponentFixture<CityWeatherPageComponent>;

  beforeEach(() => {
    const activatedRouteMock = {
      snapshot: {
        params: {
          name: 'City1',
        },
        data: {
          forecast: [
            { temp: 20 },
            { temp: 21 },
            { temp: 22 },
          ],
        },
      },
    };

    fixture = TestBed.configureTestingModule({
      declarations: [
        CityWeatherPageComponent,
        TimestampWeatherMockComponent,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(CityWeatherPageComponent);

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
