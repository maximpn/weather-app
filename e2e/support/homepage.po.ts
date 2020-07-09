export const getGreeting = () => cy.get('h1');
export const getGreetingDescription = () => cy.get('h2');
export const getCityWeatherCard = (order: number) => cy.get(`.qa-city-weather-card:nth-child(${order})`);
export const getAmsterdamWeatherCard = () => cy.get(`.qa-city-weather-card:nth-child(1)`);
