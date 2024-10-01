import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {BehaviorSubject, debounceTime} from "rxjs";
import {WeatherByCityData} from "./model/weather-by-city-data.model";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {FormControl} from "@angular/forms";
import {ToastrService} from "./services/toastr.service";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  readonly weatherData$: BehaviorSubject<WeatherByCityData | null> = new BehaviorSubject<WeatherByCityData | null>(null);
  readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly searchFormControl = new FormControl();

  constructor(
    private readonly weatherService: WeatherService,
    readonly toastrService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe((value) => {
        this.getWeatherData(value);
      });
  }

  getWeatherData(city: string): void {
    this.isLoading$.next(true);
    this.weatherService.getWeatherByCity(city)
      .pipe(untilDestroyed(this))
      .subscribe(data => {
        this.weatherData$.next(data);
        this.isLoading$.next(false);
      });
  }
}
