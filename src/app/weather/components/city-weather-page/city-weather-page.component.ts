import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimestampWeather } from '../../models/timestamp-weather.model';

@Component({
  templateUrl: 'city-weather-page.component.html',
  styleUrls: ['city-weather-page.component.scss'],
})
export class CityWeatherPageComponent {
  forecast: TimestampWeather[] | Error = this.route.snapshot.data.forecast;

  constructor(private readonly route: ActivatedRoute) {}

  get cityName(): string {
    return this.route.snapshot.params.name;
  }
}
