import { getAmsterdamWeatherCard, getCityWeatherCard, getGreeting, getGreetingDescription } from '../support/homepage.po';

describe('WeatherApp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Weather App');
    getGreetingDescription().contains('Shows weather in five European cities');
  });

  it('should display five cities', () => {
    getCityWeatherCard(1).should($card => expect($card.text()).to.match(/Amsterdam\s+\d+°C/));
    getCityWeatherCard(2).should($card => expect($card.text()).to.match(/Moscow\s+\d+°C/));
    getCityWeatherCard(3).should($card => expect($card.text()).to.match(/London\s+\d+°C/));
    getCityWeatherCard(4).should($card => expect($card.text()).to.match(/Paris\s+\d+°C/));
    getCityWeatherCard(5).should($card => expect($card.text()).to.match(/Madrid\s+\d+°C/));
  });

  it('should navigate to hourly weather forecast page for Amsterdam', () => {
    getAmsterdamWeatherCard().click();

    cy.url().should('include', '/Amsterdam/forecast');
  });
});
