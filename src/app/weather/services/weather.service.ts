import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Weather } from '../../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  async getWeatherByCityId(id: number): Promise<Weather> {
    const params = new HttpParams().set('id', id.toString());

    return this.http.get<Weather>('weather', { params }).toPromise();
  }

  async getWeatherByCityIds(ids: number[]): Promise<Weather[]> {
    const params = new HttpParams().set('ids', ids.join(','));

    return this.http.get<Weather[]>('group', { params }).toPromise();
  }
}
