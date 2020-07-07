import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

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

  it('should get weather by city id', fakeAsync(() => {
    const cityId = 111;
    const expectedWeather = {};
    let actualWeather!: any;

    service.getWeatherByCityId(111).then(x => actualWeather = x);

    const r = httpTestingController.expectOne('weather?id=111');
    expect(r.request.method).toBe('GET');

    r.flush(expectedWeather);

    tick();

    expect(actualWeather).toBe(expectedWeather);
  }));

  it('should get weather by city ids', fakeAsync(() => {
    const expectedWeather = {};
    let actualWeather!: any;

    service.getWeatherByCityIds([111, 222, 333]).then(x => actualWeather = x);

    const r = httpTestingController.expectOne('group?id=111,222,333');
    expect(r.request.method).toBe('GET');

    r.flush(expectedWeather);

    tick();

    expect(actualWeather).toBe(expectedWeather);
  }));
});
