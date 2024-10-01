export class WeatherOnHour {
  /**
   * Дата и время в ISO
   */
  time?: string;
  /**
   * Температура в Цельсиях
   */
  temp_c?: number;
  /**
   * Давление в миллибарах (1 миллибар [мбар] = 0,750063755419211 миллиметр ртутного столба)
   */
  pressure_mb?: number;
  /**
   * Влажность в процентах
   */
  humidity?: number;
  /**
   * Облачность в процентах
   */
  cloud?: number;
}
