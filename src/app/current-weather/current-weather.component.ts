import { Component } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [DatePipe, DecimalPipe],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  current: ICurrentWeather = {
    city: '',
    country: '',
    date: new Date(),
    image: '',
    temperature: 0,
    description: ''
  }

  constructor(private weatherService: WeatherService){
    this.weatherService.getCurrentWeather('Venice','IT').subscribe(data => this.current = data)
  }
}
