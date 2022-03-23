import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alk-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss']
})
export class ToysComponent implements OnInit {

  title = '¡Vamos a jugar!';
  description = `Incididunt dolore nisi nostrud in irure mollit velit est voluptate. 

        Eu ipsum labore nulla id amet. Laboris laborum ipsum 
        in do ex adipisicing labore qui anim occaecat dolore minim. Velit est voluptate. 

         Eu ipsum labore nulla id amet. Laboris laborum 
         ipsum in do ex adipisicing in do ex adipisicing labore`;

  date = new Date();
  place = 'Calle 123, Localidad, Provincia';

  imagesLeft = [
    'assets/campaign/campaña-escolar/related-escolar-campaign-1.png',
    'assets/campaign/campaña-escolar/related-escolar-campaign-2.png',
    'assets/campaign/campaña-escolar/related-escolar-campaign-3.png',
    'assets/campaign/campaña-escolar/related-escolar-campaign-4.png',
  ]
  
  imagesRight = [    
    'assets/campaign/campaña-escolar/related-escolar-campaign-5.png',
    'assets/campaign/campaña-escolar/related-escolar-campaign-6.png',
    'assets/campaign/campaña-escolar/related-escolar-campaign-7.png',
    'assets/campaign/campaña-escolar/related-escolar-campaign-8.png'
  ]

  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date();
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;


  private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  constructor() { }

  ngOnInit(): void {
    this.dDay.setDate(this.dDay.getDate() + 3);
    this.getTimeDifference();    
  }

  random(){
    return Math.random()*360+'deg'
  }

}
