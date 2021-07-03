import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  // weather api url
  public destinationUrl:string='https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c';

  // weather response
  public destinationData:any;

  Object:any = Object;

  public loader:boolean=true;



  ngOnInit(): void {
    const body = { title: 'Destination Request' };
    this.http.post<any>(this.destinationUrl,body).subscribe(data => {
      this.loader=false;
      this.destinationData=data.result;
      //console.log(this.destinationData,'dest');
  })

  }


}
