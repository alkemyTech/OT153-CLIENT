import { Activities } from '@core/models/activities.interfaces';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivityResponse } from "@app/core/models/activities.interfaces";
import { activitiesState } from '@app/core/models/activities-state.interface';
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { ActivitiesSelector as Selector } from '@app/core/redux/activities/activities.index';

@Component({
  selector: 'app-edit-activity-form',
  templateUrl: './edit-activity-form.component.html',
  styleUrls: ['./edit-activity-form.component.scss'],
})
export class EditActivityFormComponent implements OnInit, OnDestroy {
  name: string | undefined = "";
  name$ = new BehaviorSubject<string | undefined>(this.name);
  image: string | undefined = "";
  image$ = new BehaviorSubject<string | undefined>(this.name);
  description: string | undefined = "";
  description$ = new BehaviorSubject<string | undefined | null>(this.name);

  activity$: Observable<Activities> = new Observable()

  activityResponse: ActivityResponse = {
    success: true,
    data: { id: "", name: "", description: "", image: "" },
    message: "",
  };
  subscription: Array<Subscription> = [];

  constructor( private router: Router, private Store: Store<{ activitiesState: activitiesState }>) {}

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity() {
    this.activity$ = this.Store.select(Selector.SelectStateOneData);
    const activitySubscribe = this.activity$.subscribe({
        next: (activity) => {
          this.description = activity.description;
          this.description$.next(this.description);
          this.name = activity.name;
          this.name$.next(this.name);
          this.image = activity.image;
          this.image$.next(this.image);
        },
        error: (error) => { error },
        complete: () => { },
    })
    this.subscription.push(activitySubscribe);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(elem => elem.unsubscribe);
  }
}