import { Component, OnInit } from '@angular/core';
import { Activities } from '@app/core/models/activities.interfaces';
import { PrivateService } from '@features/services/private.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { activitiesState } from '@app/core/store/activities/activities.reducer';
import { fromRoot } from '@app/core/store/activities/activities.index'; 

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
      resp.activitiesState.responseAll.data?.map( (a: Activities) => this.activities$.push(a) );
    });
  }

}
