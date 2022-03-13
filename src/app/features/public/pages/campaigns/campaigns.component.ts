import { Component, OnInit } from '@angular/core';
import { Campaign } from '@app/core/models/campaign.inteface';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent implements OnInit {
  campaign: Campaign;
  timeleft = {
    days: '',
    hours: '',
    minutes: '',
  };

  constructor() {
    this.campaign = {
      title: 'Juguetes por más sonrisas',
      description:
        'Incididunt dolore nisi nostrud in irure mollit velit est voluptate. Eu ipsum labore nulla id amet. Laboris laborum ipsum in do ex adipisicing labore qui anim occaecat dolore minim.',
      date: new Date(),
      place: 'Calle 123, Localidad, Provincia',
      img: '../../../../../assets/campaign/img-juguetes-campaign.jpg',
      imgTitle: 'Campaña de juguetes',
    };
  }

  ngOnInit(): void {
    this.setDateTo();
    this.timeleft = this.getTimeLeft(this.campaign.date);
    console.log(this.timeleft);
  }

  setDateTo(): void {
    this.campaign.date.setDate(this.campaign.date.getDate() + 5); //mocked day
    this.campaign.date.setHours(this.campaign.date.getHours() + 3); //mocked hour
    this.campaign.date.setMinutes(this.campaign.date.getMinutes() + 24); //mocked minutes
  }

  getTimeLeft(dateTo): { days: string; hours: string; minutes: string } {
    let now = new Date();
    let time = (new Date(dateTo).valueOf() - now.valueOf() + 1000) / 1000; //transform timeleft to number to use Math
    let days = Math.floor(time / (3600 * 24)).toString();
    let hours = Math.floor((time / 3600) % 24).toString();
    let minutes = Math.floor((time / 60) % 60).toString();

    console.log(time, minutes, hours, days);

    return {
      days,
      hours,
      minutes,
    };
  }
}
