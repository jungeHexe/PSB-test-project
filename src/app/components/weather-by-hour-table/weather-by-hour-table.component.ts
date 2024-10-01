import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {WeatherOnHour} from '../../model/weather-on-hour.model';

@Component({
  selector: 'app-weather-by-hour-table',
  templateUrl: './weather-by-hour-table.component.html',
  styleUrls: ['./weather-by-hour-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherByHourTableComponent {

  @Input() weatherData: WeatherOnHour[] | undefined = [];
}
