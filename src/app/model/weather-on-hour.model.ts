export interface WeatherOnHour {
  /**
   * Дата и время в ISO
   */
  time: string;
  /**
   * Температура в Цельсиях
   */
  temp_c: number;
  /**
   * Давление в миллибарах
   */
  pressure_mb: number;
  /**
   * Влажность в процентах
   */
  humidity: number;
  /**
   * Облачность в процентах
   */
  cloud: number;
}
