import { Component, Input } from '@angular/core';

import { WeatherCondition } from '../../../weather/models/weather-condition.model';

@Component({
  selector: 'wa-weather-condition-icon',
  templateUrl: 'weather-condition-icon.component.html',
})
export class WeatherConditionIconComponent {
  @Input()
  weatherCondition!: WeatherCondition;

  get weatherIconLink(): string {
    return `http://openweathermap.org/img/wn/${this.weatherCondition.icon}.png`;
  }

  get weatherDescription(): string {
    return this.weatherCondition.description;
  }
}
