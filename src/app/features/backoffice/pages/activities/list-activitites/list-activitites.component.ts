import { mergeMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { getAllActivities } from '@app/shared/store/activities.actions';
import { activitiesState } from '@app/shared/store/activities.reducer';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Activities, ActivitiesResponse } from '@app/core/models/activities.interfaces';
import { PrivateService } from '@features/services/private.service';
import { Store } from '@ngrx/store';
import { fromRoot } from '@app/shared/store/activities.index'; 

@Component({
  selector: 'app-list-activitites',
  templateUrl: './list-activitites.component.html',
  styleUrls: ['./list-activitites.component.scss'],
})
export class ListActivititesComponent implements OnInit {
  public url = 'http://ongapi.alkemy.org/api/activities';
  public activities: Activities[] = [];
  public activities$ : Activities[] = [];

  constructor(private privateService: PrivateService, private activityStore: Store<{ activitiesState: activitiesState }>) {}

  ngOnInit(): void {
    this.getAllActivities();
  }


  getAllActivities(){
    this.activityStore.dispatch(fromRoot.getAllActivities())
    this.activityStore.subscribe(resp => {
      resp.activitiesState.response.data?.map(a => this.activities$.push(a) );
    });
  }

}
