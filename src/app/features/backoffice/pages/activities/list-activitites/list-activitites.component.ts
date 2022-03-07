import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Activities } from '@app/core/models/activities.interfaces';
import { activitiesState } from '@app/core/store/activities/activityState.interface';
import { fromRoot } from '@app/core/store/activities/activities.index';

@Component({
  selector: 'app-list-activitites',
  templateUrl: './list-activitites.component.html',
  styleUrls: ['./list-activitites.component.scss'],
})
export class ListActivititesComponent implements OnInit, OnDestroy {
  public url = 'http://ongapi.alkemy.org/api/activities';
  public activities$: Observable<any> = new Observable();
  public activities: Activities[];
  public activity$: Observable<Activities> = new Observable();
  public rows: number = 10;
  private subscribe: Subscription;


  constructor(
    private Store: Store<{ activitiesState: activitiesState }>
  ) {}  

  ngOnInit(): void {
    this.getAllActivities();
  }

  getAllActivities(){
    this.activities$ = this.Store.select(fromRoot.SelectStateAllData);
    this.subscribe = this.activities$.subscribe(
      (a:Activities[]) => this.activities = a
    );
    this.Store.dispatch(fromRoot.getAllActivities());
  }

  editActivity(_idActivity){
    this.Store.dispatch(fromRoot.getOneActivities( {id: _idActivity} ));    
  }

  deleteActivity(_id: number){
    this.Store.dispatch(fromRoot.deleteActivities( {id: _id} ));
    this.filterActivity(_id)
  }

  filterActivity(_id: number){
    this.activities = this.activities.filter(val => val.id != _id)
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }

}
