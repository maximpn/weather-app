import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        WeatherService,
      ],
    });

    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should get city geo location by city name', () => {
    const expectedGeoLocation = {};
    let actualGeoLocation!: any;

    service.getCityGeoLocation('City name').subscribe(x => actualGeoLocation = x);

    const r = httpTestingController.expectOne('weather?q=City%20name');
    expect(r.request.method).toBe('GET');

    r.flush({ coord: expectedGeoLocation });

    expect(actualGeoLocation).toBe(expectedGeoLocation);
  });

  it('should get weather by city ids', () => {
    const expectedWeather = {};
    let actualWeather!: any;

    service.getWeatherByCityIds([111, 222, 333]).subscribe(x => actualWeather = x);

    const r = httpTestingController.expectOne('group?id=111,222,333&units=metric');
    expect(r.request.method).toBe('GET');

    r.flush({ list: expectedWeather });

    expect(actualWeather).toBe(expectedWeather);
  });

  it('should get hourly weather forecast by location', () => {
    const expectedWeather = {};
    let actualWeather!: any;

    service.getHourlyWeatherForecastByLocation(10, 10).subscribe(x => actualWeather = x);

    const r = httpTestingController.expectOne('onecall?lat=10&lon=10&exclude=current,minutely,daily&units=metric');
    expect(r.request.method).toBe('GET');

    r.flush({ hourly: expectedWeather });

    expect(actualWeather).toBe(expectedWeather);
  });
});
