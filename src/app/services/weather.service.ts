import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map, Observable, of} from 'rxjs';
import {WeatherApiResponse} from '../model/weather-api-response.model';
import {WeatherByCityData} from '../model/weather-by-city-data.model';
import {ToastrService} from './toastr.service';
import {ToastrTypeClass} from '../app.constants';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  readonly API_URL =
    `http://api.weatherapi.com/v1/forecast.json`;

  constructor(
    private readonly http: HttpClient,
    private readonly toastrService: ToastrService,
  ) {}

  getWeatherByCity(city: string): Observable<WeatherByCityData | null> {
    if (city === '' || !city) {
      return of(null);
    }
    const cleanedInput = city.trim().replace(/[^a-zA-Zа-яА-ЯёЁ\s-]+/g, '');
    const params = new HttpParams().appendAll(
      { key: environment.apiKey, days: 1, aqi: 'no', alerts: 'no', q: cleanedInput }
    );

    return this.http.get(this.API_URL, {params})
      .pipe(
        catchError(err => {
          this.toastrService.show(`Ошибка при получении данных: ${err.error?.error?.message}`, {className: ToastrTypeClass.DANGER});
          return of(null);
        }),
        map((response: WeatherApiResponse | null) => {
          if (response) {
            return {
              current: response.current,
              weatherByHours: response.forecast?.forecastday?.map(o => o.hour).flat(),
            };
          }
          return null;
        }),
      );

  }
}
