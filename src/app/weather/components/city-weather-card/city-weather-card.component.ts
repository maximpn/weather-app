import { Component, Input } from '@angular/core';

import { CurrentWeather } from '../../models/current-weather.model';

@Component({
  selector: 'wa-city-weather-card',
  templateUrl: 'city-weather-card.component.html',
})
export class CityWeatherCardComponent {
  @Input()
  weather!: CurrentWeather;

  get weatherIconLink(): string {
    return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}.png`;
  }

  get weatherDescription(): string {
    return this.weather.weather[0].description;
  }
}
