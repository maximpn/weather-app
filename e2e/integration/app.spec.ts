import { getGreeting, getGreetingDescription } from '../support/app.po';

describe('WeatherApp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Weather App');
    getGreetingDescription().contains('Shows weather in five European cities');
  });
});
