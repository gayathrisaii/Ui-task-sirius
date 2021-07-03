import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

//Author:Gayathri

@Component({
  selector: 'app-templateindex',
  templateUrl: './templateindex.component.html',
  styleUrls: ['./templateindex.component.scss']
})
export class TemplateindexComponent implements OnInit {
  

  constructor(private viewportScroller:ViewportScroller) { }


  public ngOnInit(): void {
      var deadline = new Date("Jul 10, 2021 15:37:25").getTime();
      var x = setInterval(function() {
      var now = new Date().getTime();
      var t = deadline - now;
      //  console.log(t);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      (<HTMLInputElement>document.getElementById("timer")).innerHTML = days + "d " 
      + hours + "h " + minutes + "m " + seconds + "s ";
      if (t < 0) {
      clearInterval(x);
      (<HTMLInputElement>document.getElementById("timer")).innerHTML = "EXPIRED";
      }
      }, 1000)

  }


  public onClickscroll(elem:string):void{
  this.viewportScroller.scrollToAnchor(elem);
  }

}
