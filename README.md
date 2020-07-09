# WeatherApp

Angular 10 based web application which displays weather in 5 European cities. The application uses only libraries
provided along with Angular: Angular Router and Angular Material. Router allows to use client navigation to navigate between
two existing pages. The first page shows the list of 5 Eropean cities with brief information about the current weather.
After clicking on a city weather card application displays hourly weather forecast for the selected city.

To fetch weather forecast information [OpenWeather](https://openweathermap.org/api) data provider is used. Despite it
provides many services most of them require subscription. The most convenient one is
[One Call API](https://openweathermap.org/api/one-call-api). It provides great flexibility but it's
inconvenient to fetch data related to particular cities especially if bulk data fetching is preferred. So that the
decision was made to use [Current Weather Data API](https://openweathermap.org/current) for homepage which provides
an endpoint to fetch the current weather for up to 20 cities. To display hourly weather forecast on the other page
One Call API is used. This part requires a trick to get hourly weather forecast for a specific city since One Call API
expects a city's geo location and this geo location isn't available inside the application so the application fetches
city's geo location from Current Weather Data API by using the city's id and then fetches the city's hourly weather forecast.
This logic is implemented in route data's resolver *WeatherForecastResolverService*. As a side effect hourly weather
forecast page allows to view the forecast for another cities by providing a valid url. For example for cities presented
on homepage we have `/Amsterdam/forecast` and we can easily view the forecast for Rome by using `/Rome/forecast` url.
It's possible to check it [here](https://weather-app-ochre.vercel.app/Rome/forecast).

On top of that special attention was devoted to error handling. A structure directive *ErrorGuardDirective* was created
to handle errors. It's able to recognize the data stream returned an *Error* instance and shows the default error message.

## Live demo

The live demo can be found [here](https://weather-app-ochre.vercel.app).

## Running locally

Before running any command install dependencies first by running `npm ci`.

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `npm run test` to execute the unit tests.

### Running end to end tests

Run `npm run e2e` to execute the unit tests.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build:prod` for a production build.

