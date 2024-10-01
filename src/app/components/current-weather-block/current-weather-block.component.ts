import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {WeatherOnHour} from '../../model/weather-on-hour.model';

@Component({
  selector: 'app-current-weather-block',
  templateUrl: './current-weather-block.component.html',
  styleUrls: ['./current-weather-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherBlockComponent {

  @Input() weatherData: WeatherOnHour | undefined;

  readonly TODAY = new Date().toLocaleString();
}
