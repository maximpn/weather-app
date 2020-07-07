import { TimestampWeather } from './timestamp-weather.model';

export interface CurrentWeather extends TimestampWeather {
  sunrise: number;
  sunset: number;
  uvi: number;
}
