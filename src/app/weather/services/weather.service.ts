import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { CityWeather } from '../models/city-weather.model';
import { GeoLocation } from '../models/geo-location.model';
import { TimestampWeather } from '../models/timestamp-weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  getCityGeoLocation(name: string): Observable<GeoLocation> {
    const params = new HttpParams().set('q', name);

    return this.http.get<CityWeather>('weather', { params }).pipe(
      pluck('coord'),
    );
  }

  getWeatherByCityIds(ids: number[]): Observable<CityWeather[]> {
    const params = new HttpParams().set('id', ids.join(',')).set('units', 'metric');

    return this.http.get<{ list: CityWeather[] }>('group', { params }).pipe(
      pluck('list'),
    );
  }

  getHourlyWeatherForecastByLocation(lat: number, lon: number): Observable<TimestampWeather[]> {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('exclude', 'current,minutely,daily')
      .set('units', 'metric');

    return this.http.get<{ hourly: TimestampWeather[] }>('onecall', { params }).pipe(
      pluck('hourly'),
    );
  }
}
