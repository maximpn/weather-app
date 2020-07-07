import { Component, Inject } from '@angular/core';

import { Weather } from './models/weather.model';
import { MAIN_PAGE_CITY_IDS } from './services/main-page-city-ids';
import { WeatherService } from './weather/services/weather.service';

interface CityWeather {
  cityId: number;
  weatherPromise: Promise<Weather>;
}

@Component({
  selector: 'wa-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  citiesWeather$ = this.weatherService.getWeatherByCityIds(this.cityIds);

  constructor(
    @Inject(MAIN_PAGE_CITY_IDS) private readonly cityIds: number[],
    private readonly weatherService: WeatherService,
  ) {}

  trackById(index: number, value: Weather): number {
    return value.id;
  }
}
