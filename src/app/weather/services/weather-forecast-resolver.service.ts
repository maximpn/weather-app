import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';

import { TimestampWeather } from '../models/timestamp-weather.model';

import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastResolverService implements Resolve<TimestampWeather[] | Error> {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TimestampWeather[] | Error> | Observable<never> {
    const name = route.paramMap.get('name');

    if (!name) {
      this.goToHomePage();

      return EMPTY;
    }

    return this.weatherService.getCityGeoLocation(name).pipe(
      first(),
      switchMap(location => this.weatherService.getHourlyWeatherForecastByLocation(location.lat, location.lon)),
      catchError((e, _) => of(e)),
    );
  }

  private goToHomePage(): void {
    this.router.navigate(['/']);
  }
}
