import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
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

  describe('getCityGeoLocation', () => {
    const expectedGeoLocation = {};
    let actualGeoLocation!: any;
    let r: TestRequest;

    beforeEach(() => {
      service.getCityGeoLocation('City name').subscribe(x => actualGeoLocation = x);

      r = httpTestingController.expectOne('weather?units=metric&q=City%20name');
    });

    it('should return city geo location', () => {
      expect(r.request.method).toBe('GET');

      r.flush({ coord: expectedGeoLocation });

      expect(actualGeoLocation).toBe(expectedGeoLocation);
    });

    it('should return an error', () => {
      r.error(new ErrorEvent('some-type', { message: 'Some error' }));

      expect(actualGeoLocation.error.message).toBe('Some error');
    });
  });

  describe('getWeatherByCityIds', () => {
    const expectedWeather = {};
    let actualWeather!: any;
    let r: TestRequest;

    beforeEach(() => {
      service.getWeatherByCityIds([111, 222, 333]).subscribe(x => actualWeather = x);
      r = httpTestingController.expectOne('group?id=111,222,333&units=metric');
    });

    it('should return city weather', () => {
      expect(r.request.method).toBe('GET');

      r.flush({ list: expectedWeather });

      expect(actualWeather).toBe(expectedWeather);
    });

    it('should return an error', () => {
      r.error(new ErrorEvent('some-type', { message: 'Some error' }));

      expect(actualWeather.error.message).toBe('Some error');
    });
  });

  describe('getHourlyWeatherForecastByLocation', () => {
    const expectedWeather = {};
    let actualWeather!: any;
    let r: TestRequest;

    beforeEach(() => {
      service.getHourlyWeatherForecastByLocation(10, 10).subscribe(x => actualWeather = x);
      r = httpTestingController.expectOne('onecall?units=metric&lat=10&lon=10&exclude=current,minutely,daily');
    });

    it('should return city weather', () => {
      expect(r.request.method).toBe('GET');

      r.flush({ hourly: expectedWeather });

      expect(actualWeather).toBe(expectedWeather);
    });

    it('should return an error', () => {
      r.error(new ErrorEvent('some-type', { message: 'Some error' }));

      expect(actualWeather.error.message).toBe('Some error');
    });
  });
});
