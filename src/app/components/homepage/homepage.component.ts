import { Component, Inject } from '@angular/core';

import { MAIN_PAGE_CITY_IDS } from '../../services/main-page-city-ids';
import { CurrentWeather } from '../../weather/models/current-weather.model';
import { WeatherService } from '../../weather/services/weather.service';

@Component({
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {
  citiesWeather$ = this.weatherService.getWeatherByCityIds(this.cityIds);

  constructor(
    @Inject(MAIN_PAGE_CITY_IDS) private readonly cityIds: number[],
    private readonly weatherService: WeatherService,
  ) {}

  trackById(index: number, value: CurrentWeather): number {
    return value.id;
  }
}
