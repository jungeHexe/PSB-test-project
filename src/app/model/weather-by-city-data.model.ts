import {WeatherOnHour} from './weather-on-hour.model';

export interface WeatherByCityData {
  /**
   * Данные о текущей погоде
   */
  current?: WeatherOnHour;
  /**
   * Погода по часам
   */
  weatherByHours?: WeatherOnHour[];
}
