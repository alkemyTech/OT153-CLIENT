import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activities } from '@app/core/models/activities.interfaces';
import { PublicapiService } from '@app/core/services/publicapi.service';
import { ActivityResponse } from '@app/shared/models/activity.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-activity-selected',
  templateUrl: './activity-selected.component.html',
  styleUrls: ['./activity-selected.component.scss']
})
export class ActivitySelectedComponent implements OnInit {

  ActivityId: string | undefined;
  activity: ActivityResponse;
  subscription:Subscription;
  url:string = `http://ongapi.alkemy.org/api/activities`;

  constructor(private httpPublic: PublicapiService, private router: Router) { }

  ngOnInit(): void {
    this.ActivityId = this.router.url.split("/").pop();
    if(this.ActivityId){
    this.subscription = this.httpPublic.get(this.url, this.ActivityId).subscribe((activity) => {
      console.log(activity);
      this.activity = activity;
    })
  }
    
     
  }



}
