import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';
import { API_ACCESS_TOKEN } from './services/api-access-token';
import { API_ENDPOINT } from './services/api-endpoint';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {
      provide: API_ACCESS_TOKEN,
      useValue: {
        paramName: 'APPID',
        value: 'dfcc4c8ffb4d85e5183930398cbcacff',
      },
    },
    {
      provide: API_ENDPOINT,
      useValue: {
        endpoint: 'http://api.openweathermap.org/data',
        version: '2.5',
      },
    },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
