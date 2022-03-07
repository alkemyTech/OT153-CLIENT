import { NewActivity } from '@core/models/activities.interfaces';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Activities } from '@app/core/models/activities.interfaces';
import { activitiesState } from '@app/core/store/activities/activityState.interface';
import { fromRoot } from '@app/core/store/activities/activities.index';

@Component({
  selector: 'app-list-activitites',
  templateUrl: './list-activitites.component.html',
  styleUrls: ['./list-activitites.component.scss'],
})
export class ListActivititesComponent implements OnInit {
  public url = 'http://ongapi.alkemy.org/api/activities';
  public activities$: Observable<any> = new Observable();
  public activity$: Observable<any> = new Observable();

  constructor(
    private Store: Store<{ activitiesState: activitiesState }>
  ) {}

  ngOnInit(): void {
    this.getAllActivities();
  }

  getAllActivities(){
    this.activities$ = this.Store.select(fromRoot.SelectStateAllData);
    this.Store.dispatch(fromRoot.getAllActivities());
  }

  editActivity(_idActivity){
    // this.activity$ = this.Store.select(fromRoot.SelectStateOneData);
    this.Store.dispatch(fromRoot.getOneActivities( {id: _idActivity} ));    
  }

}
