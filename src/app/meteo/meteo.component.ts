import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  
})
export class MeteoComponent implements OnInit {
  weatherData:any;

  constructor() { }
WeatherData:any;
  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }
  getWeatherData(){
    let data = JSON.parse('{ "coord": {"lon": 10.99,"lat": 44.34}, "weather": [{"id": 501,"main": "Rain","description": "moderate rain","icon": "10d"}],"base": "stations","main": {"temp": 298.48,"feels_like": 298.74,"temp_min": 297.56,"temp_max": 300.05,"pressure": 1015,"humidity": 64,"sea_level": 1015,"grnd_level": 933},"visibility": 10000,"wind": {"speed": 0.62,"deg": 349,"gust": 1.18},"rain": {"1h": 3.16},"clouds": {"all": 100},"dt": 1661870592,"sys": {"type": 2,"id": 2075663,"country": "IT","sunrise": 1661834187,"sunset": 1661882248},"timezone": 7200,"id": 3163858,"name": "Zocca","cod": 200} ')
    this.setWeatherData(data); 
  }
  setWeatherData(data:any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString()
    /*this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime()); */
    this.weatherData.temp_celcius =(this.WeatherData.main.temp -273.15).toFixed(0);
    this.weatherData.temp_min = (this.WeatherData.main.temp_min -273.15).toFixed(0);
    this.weatherData.temp_max = (this.WeatherData.main.temp_max -273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(0);
  }

}
