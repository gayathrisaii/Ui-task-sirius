import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Gayathri G
 */

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private http:HttpClient) { }

  // weather api url
  public weatherUrl:string='https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576';

  // weather response
  public weatherResponse:any;

  Object = Object;



  ngOnInit(): void {
    const body = { title: 'Weather Request' };
    this.http.post<any>(this.weatherUrl,body).subscribe(data => {
      this.weatherResponse=data.result;
     // console.log(this.weatherResponse,'weather');
  })
  }

}
