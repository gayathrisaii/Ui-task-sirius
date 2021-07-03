import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
   
  public footerOne:string[]=[];

  public footerTwo:string[]=[];

  public footerThree:string[]=[];

  public footerFour:string[]=[];

  ngOnInit(): void {
    this.footerOne = [
      'About',
      'Awards',
      'Contact us',
      'Feedback'
    ];
    this.footerTwo = [
      'The United States',
      'India',
      'Brazil',
      'Canada'
    ];

    this.footerThree = [
      'Australia',
      'England',
      'France',
      'Germany'
    ];

    this.footerFour = [
     'This layout is created as a pa of Sirius UI Recruitments.All the above content has no direct relation with Sirius business'
    ];
  }

}
