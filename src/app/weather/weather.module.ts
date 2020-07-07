import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CityWeatherCardComponent } from './components/city-weather-card/city-weather-card.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    CityWeatherCardComponent,
  ],
  exports: [
    CityWeatherCardComponent,
  ],
})
export class WeatherModule {}
