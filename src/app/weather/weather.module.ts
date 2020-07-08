import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CityWeatherCardComponent } from './components/city-weather-card/city-weather-card.component';
import { CityWeatherPageComponent } from './components/city-weather-page/city-weather-page.component';
import { TimestampWeatherComponent } from './components/timestamp-weather/timestamp-weather.component';
import { WeatherConditionIconComponent } from './components/weather-condition-icon/weather-condition-icon.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  imports: [
    SharedModule,
    WeatherRoutingModule,
  ],
  declarations: [
    CityWeatherCardComponent,
    CityWeatherPageComponent,
    TimestampWeatherComponent,
    WeatherConditionIconComponent,
  ],
  exports: [
    CityWeatherCardComponent,
  ],
})
export class WeatherModule {}
