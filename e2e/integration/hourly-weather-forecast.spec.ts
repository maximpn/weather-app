import { getHourForecastRow, getPageTitle } from '../support/hourly-weather-forecast.po';

describe('WeatherApp', () => {
  beforeEach(() => cy.visit('/Amsterdam/forecast'));

  it('should display page title', () => {
    getPageTitle().contains('Hourly weather forecast for Amsterdam');
  });

  it('should hourly weather forecast rows', () => {
    for (let i = 1; i < 6; ++i) {
      getHourForecastRow(i).should($row => expect($row.text()).to.match(/\d{1,2}:00[\s\w]+\d{1,2}°/));
    }
  });
});
