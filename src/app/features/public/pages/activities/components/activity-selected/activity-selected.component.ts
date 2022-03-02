import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { ActivityResponse } from '@app/core/models/activities.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activity-selected',
  templateUrl: './activity-selected.component.html',
  styleUrls: ['./activity-selected.component.scss'],
})
export class ActivitySelectedComponent implements OnInit, OnDestroy {
  public title: string = 'Actividades';
  public backgroundColor = '#42526e';
  public textColor = '#fff';

  ActivityId: string | undefined;
  activity: ActivityResponse;
  subscription: Subscription;
  url: string = `http://ongapi.alkemy.org/api/activities`;

  constructor(private httpPublic: PublicapiService, private router: Router) {}

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity(): void {
    this.ActivityId = this.router.url.split('/').pop();

    if (this.ActivityId) {
      this.subscription = this.httpPublic.getPublicActivity(this.url, this.ActivityId).subscribe(
        (activity) => {
          this.activity = activity;
        },
        (err) => {
          this.router.navigate(['/actividades']);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
