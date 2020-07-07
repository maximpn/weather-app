import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CurrentWeather } from '../models/current-weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  async getWeatherByCityId(id: number): Promise<CurrentWeather> {
    const params = new HttpParams().set('id', id.toString()).set('units', 'metric');

    return this.http.get<CurrentWeather>('weather', { params }).toPromise();
  }

  getWeatherByCityIds(ids: number[]): Observable<CurrentWeather[]> {
    const params = new HttpParams().set('id', ids.join(',')).set('units', 'metric');

    return this.http.get<{ list: CurrentWeather[] }>('group', { params }).pipe(
      map(response => response.list),
    );
  }
}
