import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherService {
  constructor(private readonly http: HttpClient) {}

  async getWeatherByCityId(id: number): Promise<Weather> {
    const params = new HttpParams().set('id', id.toString()).set('units', 'metric');

    return this.http.get<Weather>('weather', { params }).toPromise();
  }

  getWeatherByCityIds(ids: number[]): Observable<Weather[]> {
    const params = new HttpParams().set('id', ids.join(','));

    return this.http.get<{ list: Weather[] }>('group', { params }).pipe(
      map(response => response.list),
    );
  }
}
