import { Component, OnInit } from '@angular/core';
import { Campaign } from '@app/core/models/campaign.inteface';

@Component({
  selector: 'app-campaigns-school',
  templateUrl: './campaigns-school.component.html',
  styleUrls: ['./campaigns-school.component.scss'],
})
export class CampaignsSchoolComponent implements OnInit {
  campaign: Campaign;
  timeleft = {
    days: '',
    hours: '',
    minutes: '',
  };

  constructor() {
    this.campaign = {
      title: 'Juntos en la vuelta al cole',
      description: `Incididunt dolore nisi nostrud in irure mollit velit est voluptate. 

        Eu ipsum labore nulla id amet. Laboris laborum ipsum 
        in do ex adipisicing labore qui anim occaecat dolore minim. Velit est voluptate. 

         Eu ipsum labore nulla id amet. Laboris laborum 
         ipsum in do ex adipisicing in do ex adipisicing labore`,
      date: new Date(),
      place: 'Calle 123, Localidad, Provincia',
    };
  }

  ngOnInit(): void {
    this.setDateTo();
    this.timeleft = this.getTimeLeft(this.campaign.date);
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

    return {
      days,
      hours,
      minutes,
    };
  }
}
