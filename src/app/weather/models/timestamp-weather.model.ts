import { BaseWeather } from './base-weather.model';
import { WeatherCondition } from './weather-condition.model';

export interface TimestampWeather extends BaseWeather {
  dt: number;
  dew_point: number;
  clouds: number;
  visibility: number;
  weather: WeatherCondition[];
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  rain?: {
    '1h': number;
  };
  snow?: {
    '1h': number;
  };
}
