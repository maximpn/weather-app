import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampWeather } from '../../models/timestamp-weather.model';
import { WeatherCondition } from '../../models/weather-condition.model';

import { TimestampWeatherComponent } from './timestamp-weather.component';

@Component({
  selector: 'wa-weather-condition-icon',
  template: '{{ weatherCondition | json }}',
})
class WeatherConditionIconMockComponent {
  @Input()
  weatherCondition!: WeatherCondition;
}

describe('TimestampWeatherComponent', () => {
  let fixture: ComponentFixture<TimestampWeatherComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        TimestampWeatherComponent,
        WeatherConditionIconMockComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(TimestampWeatherComponent);

    fixture.componentInstance.weather = {
      dt: new Date(2020, 5, 2).getTime() / 1000,
      weather: [
        { id: 1, main: 'cloudy', description: 'cloudy', icon: '02d' },
      ],
      temp: 30.55,
      feels_like: 31,
      clouds: 20,
    } as TimestampWeather;

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
