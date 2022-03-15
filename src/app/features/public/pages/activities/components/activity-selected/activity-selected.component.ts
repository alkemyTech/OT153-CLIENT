import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { Activities, ActivityResponse } from '@app/core/models/activities.interfaces';
import { Observable, Subscription } from 'rxjs';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { activitiesState } from '@app/core/models/activities-state.interface';
import {
  ActivitiesSelector as Selector,
  ActivitiesActions as Actions,
} from '@app/core/redux/activities/activities.index';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';

@Component({
  selector: 'app-activity-selected',
  templateUrl: './activity-selected.component.html',
  styleUrls: ['./activity-selected.component.scss'],
})
export class ActivitySelectedComponent implements OnInit, OnDestroy {
  public title: string = 'Actividades';
  public backgroundColor = '#42526e';
  public textColor = '#fff';
  public activity$: Observable<Activities> = new Observable();
  public error$: Observable<HttpErrorResponse> = new Observable();

  ActivityId: number = parseInt(this.router.url.split('/').pop() || '');
  activity: Activities;
  subscription: Subscription;
  url: string = environment.apiUrlActivities;

  constructor(
    private httpPublic: PublicapiService,
    private router: Router,
    private Store: Store<{ activitiesState: activitiesState }>,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.activity$ = this.Store.select(Selector.SelectStateOneData);
    this.error$ = this.Store.select(Selector.SelectStateError);
    this.Store.dispatch(Actions.getOneActivities({ id: this.ActivityId }));
    this.getActivity();
  }

  getActivity(): void {
    this.activity$.subscribe((activity) => {
      this.activity = activity;
    });
    this.error$.subscribe((error) => {
      if (error.error) {
        let dialog: DialogData = { type: DialogType.ERROR, header: 'ERROR', content: error.message };
        this.dialogService.show(dialog);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
