import { Component, Input } from '@angular/core';

import { CurrentWeather } from '../../models/current-weather.model';

@Component({
  selector: 'wa-city-weather-card',
  templateUrl: 'city-weather-card.component.html',
})
export class CityWeatherCardComponent {
  @Input()
  weather!: CurrentWeather;
}
