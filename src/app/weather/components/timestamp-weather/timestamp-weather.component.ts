import { Component, Input } from '@angular/core';

import { TimestampWeather } from '../../models/timestamp-weather.model';

@Component({
  selector: 'wa-timestamp-weather',
  templateUrl: 'timestamp-weather.component.html',
  styleUrls: ['timestamp-weather.component.scss'],
})
export class TimestampWeatherComponent {
  @Input()
  weather!: TimestampWeather;
}
