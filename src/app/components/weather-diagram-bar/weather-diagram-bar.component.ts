import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {WeatherOnHour} from '../../model/weather-on-hour.model';
import {BarChart} from 'echarts/charts';
import {EChartsOption} from 'echarts';
import {GridComponent} from 'echarts/components';
import {FormControl} from '@angular/forms';
import {startWith} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-weather-diagram-bar',
  templateUrl: './weather-diagram-bar.component.html',
  styleUrls: ['./weather-diagram-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherDiagramBarComponent implements OnInit {

  @Input() weatherData: WeatherOnHour[] | undefined = [];

  echartsOptions: EChartsOption = {};
  readonly echartsExtensions = [BarChart, GridComponent];
  readonly yValues: { id: keyof WeatherOnHour, value: string }[] = [
    { id: 'temp_c', value: 'Температура (°C)' },
    { id: 'cloud', value: 'Облачность (%)' },
    { id: 'humidity', value: 'Влажность (%)' },
    { id: 'pressure_mb', value: 'Давление (мбар)' },
  ];
  readonly selectFormControl = new FormControl(
    this.yValues?.find(el => el.id === 'temp_c'));

  ngOnInit(): void {
    if (this.weatherData?.length) {
      this.echartsOptions = {
        xAxis: {
          name: 'Время',
          type: 'category',
          data: this.weatherData.map(o => o.time?.split(' ')[1]),
        },
      };
    }
    this.changeYValueHandler();
  }

  changeYValueHandler(): void {
    this.selectFormControl.valueChanges
      .pipe(
        startWith(this.selectFormControl.value),
        untilDestroyed(this),
      ).subscribe(value => {
        if (value && this.weatherData) {
          const data = this.weatherData.map(o => +o[value.id]);
          this.echartsOptions = {
            ...this.echartsOptions,
            yAxis: {
              name: value.value,
              type: 'value',
              min: Math.min(...data),
            },
            series: [
              {
                data,
                type: 'bar'
              }
            ],
          }
        }
    });
  }
}
