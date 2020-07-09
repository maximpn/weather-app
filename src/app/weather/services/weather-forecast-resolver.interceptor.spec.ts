import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { of, throwError } from 'rxjs';
import { mocked } from 'ts-jest/utils';

import { TimestampWeather } from '../models/timestamp-weather.model';

import { WeatherForecastResolverService } from './weather-forecast-resolver.service';
import { WeatherService } from './weather.service';

describe('WeatherForecastResolverService', () => {
  let service: WeatherForecastResolverService;

  let weatherServiceMock: WeatherService;
  let routerMock: Router;
  let activatedRouteSnapshotMock: ActivatedRouteSnapshot;

  const cityGeoLocationStub = {};
  const forecastStub: TimestampWeather[] = [];

  beforeEach(() => {
    weatherServiceMock = {
      getCityGeoLocation: jest.fn(() => of(cityGeoLocationStub)),
      getHourlyWeatherForecastByLocation: jest.fn(() => of(forecastStub)),
    } as unknown as typeof weatherServiceMock;

    routerMock = {
      navigate: jest.fn(),
    } as unknown as typeof routerMock;

    activatedRouteSnapshotMock = {
      paramMap: {
        get: jest.fn(() => 'Cityname'),
      },
    } as unknown as typeof activatedRouteSnapshotMock;

    TestBed.configureTestingModule({
      providers: [
        WeatherForecastResolverService,
        { provide: WeatherService, useValue: weatherServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });

    service = TestBed.inject(WeatherForecastResolverService);
  });

  it('should get city name param', () => {
    service.resolve(activatedRouteSnapshotMock, {} as RouterStateSnapshot);

    expect(activatedRouteSnapshotMock.paramMap.get).toHaveBeenCalledWith('name');
  });

  it('should navigate to the root if there is name', () => {
    let resolvedValue: TimestampWeather[] | Error | undefined;

    mocked(activatedRouteSnapshotMock.paramMap.get).mockReturnValue(null);

    service.resolve(activatedRouteSnapshotMock, {} as RouterStateSnapshot).subscribe(x => resolvedValue = x);

    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
    expect(resolvedValue).toBeUndefined();
  });

  it('should resolve forecast', () => {
    let resolvedValue: TimestampWeather[] | Error | undefined;

    service.resolve(activatedRouteSnapshotMock, {} as RouterStateSnapshot).subscribe(x => resolvedValue = x);

    expect(resolvedValue).toBe(forecastStub);
  });

  it('should resolve error if it is impossible to resolve geo location', () => {
    const expectedError = new Error('Some error');
    let resolvedValue: TimestampWeather[] | Error | undefined;

    mocked(weatherServiceMock.getCityGeoLocation).mockReturnValue(throwError(expectedError));

    service.resolve(activatedRouteSnapshotMock, {} as RouterStateSnapshot).subscribe(x => resolvedValue = x);

    expect(resolvedValue).toBe(expectedError);
  });

  it('should resolve error if it is impossible to resolve forecast', () => {
    const expectedError = new Error('Some error');
    let resolvedValue: TimestampWeather[] | Error | undefined;

    mocked(weatherServiceMock.getHourlyWeatherForecastByLocation).mockReturnValue(throwError(expectedError));

    service.resolve(activatedRouteSnapshotMock, {} as RouterStateSnapshot).subscribe(x => resolvedValue = x);

    expect(resolvedValue).toBe(expectedError);
  });
});
