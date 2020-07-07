import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CityWeatherCardComponent } from './components/city-weather-card/city-weather-card.component';
import { CityWeatherPageComponent } from './components/city-weather-page/city-weather-page.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  imports: [
    SharedModule,
    WeatherRoutingModule,
  ],
  declarations: [
    CityWeatherCardComponent,
    CityWeatherPageComponent,
  ],
  exports: [
    CityWeatherCardComponent,
  ],
})
export class WeatherModule {}
