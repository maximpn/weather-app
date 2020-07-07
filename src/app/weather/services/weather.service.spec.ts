import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CityWeatherService } from './weather.service';

describe('CityWeatherService', () => {
  let service: CityWeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CityWeatherService,
      ],
    });

    service = TestBed.inject(CityWeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should get city-weather by city id', fakeAsync(() => {
    const cityId = 111;
    const expectedWeather = {};
    let actualWeather!: any;

    service.getWeatherByCityId(111).then(x => actualWeather = x);

    const r = httpTestingController.expectOne('city-weather?id=111');
    expect(r.request.method).toBe('GET');

    r.flush(expectedWeather);

    tick();

    expect(actualWeather).toBe(expectedWeather);
  }));

  it('should get city-weather by city ids', fakeAsync(() => {
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
