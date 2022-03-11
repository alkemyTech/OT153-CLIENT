import { Component, OnInit } from '@angular/core';

export interface Campaign {
  description: string;
  date: Date;
  place: string;
}

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent implements OnInit {
  campaign: Campaign;
  daysLeft: number;
  hoursLeft: number;
  minutesLeft: number;

  constructor() {
    this.campaign = {
      description:
        'Incididunt dolore nisi nostrud in irure mollit velit est voluptate. Eu ipsum labore nulla id amet. Laboris laborum ipsum in do ex adipisicing labore qui anim occaecat dolore minim.',
      date: new Date(),
      place: 'Calle 123, Localidad, Provincia',
    };
  }

  ngOnInit(): void {
    this.campaign.date.setDate(this.campaign.date.getDate() + 5); //mocked day
    this.setTimeLeft();
  }

  setTimeLeft(): void {
    this.campaign.date.getDate() < new Date().getDate()
      ? (this.daysLeft = 0)
      : (this.daysLeft = this.campaign.date.getDate() - new Date().getDate());

    this.campaign.date.getHours() < new Date().getHours()
      ? (this.hoursLeft = 0)
      : (this.hoursLeft = this.campaign.date.getHours() - new Date().getDate());
      
    this.campaign.date.getMinutes() < new Date().getMinutes()
      ? (this.minutesLeft = 0)
      : (this.minutesLeft = 60 - this.campaign.date.getMinutes());
        
  }
}
