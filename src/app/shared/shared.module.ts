import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherConditionIconComponent } from './components/weather-condition-icon/weather-condition-icon.component';
import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  declarations: [
    WeatherConditionIconComponent,
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    WeatherConditionIconComponent,
  ],
})
export class SharedModule {}
