import {WeatherOnHour} from "./weather-on-hour.model";

export interface WeatherByCityData {
  current?: WeatherOnHour;
  weatherByHours?: WeatherOnHour[];
}
