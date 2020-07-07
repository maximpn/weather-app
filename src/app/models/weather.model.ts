import { Country } from './country.enum';
import { GeoLocation } from './geo-location.model';
import { WeatherCondition } from './weather-condition.model';

export interface Weather {
  coord: GeoLocation;
  weather: WeatherCondition[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  rain?: {
    '1h': number;
    '3h': number;
  };
  snow?: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: string;
    country: Country;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
