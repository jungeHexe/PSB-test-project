import {WeatherOnHour} from './weather-on-hour.model';

export interface WeatherApiResponse {
  current?: WeatherOnHour;
  forecast?: Forecast;
}

export interface Forecast {
  date: string;
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  hour: WeatherOnHour[];
}
