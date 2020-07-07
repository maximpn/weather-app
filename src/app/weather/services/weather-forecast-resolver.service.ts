import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';

import { TimestampWeather } from '../models/timestamp-weather.model';
import { WeatherForecast } from '../models/weather-forecast.model';

import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastResolverService implements Resolve<TimestampWeather[]> {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TimestampWeather[]> | Observable<never> {
    const name = route.paramMap.get('name');

    if (!name) {
      this.goToHomePage();

      return EMPTY;
    }

    return this.weatherService.getCityGeoLocation(name).pipe(
      switchMap(location => this.weatherService.getHourlyWeatherForecastByLocation(location.lat, location.lon)),
      take(1),
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        } else {
          this.goToHomePage();

          return EMPTY;
        }
      }),
    );
  }

  private goToHomePage(): void {
    this.router.navigate(['/']);
  }
}
