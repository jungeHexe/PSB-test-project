import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CurrentWeatherBlockComponent } from './components/current-weather-block/current-weather-block.component';
import { WeatherByHourTableComponent } from './components/weather-by-hour-table/weather-by-hour-table.component';
import { WeatherDiagramBarComponent } from './components/weather-diagram-bar/weather-diagram-bar.component';
import {EchartsxModule} from 'echarts-for-angular';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherBlockComponent,
    WeatherByHourTableComponent,
    WeatherDiagramBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    EchartsxModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
