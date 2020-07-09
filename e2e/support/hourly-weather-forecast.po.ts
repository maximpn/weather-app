export const getPageTitle = () => cy.get('h1');
export const getHourForecastRow = (order: number) => cy.get(`.qa-hour-forecast:nth-child(${order * 2 - 1})`);
