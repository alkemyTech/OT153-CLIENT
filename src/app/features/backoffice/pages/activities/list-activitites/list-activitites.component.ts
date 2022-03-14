import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Activities } from '@app/core/models/activities.interfaces';
import { activitiesState } from '@core/models/activities-state.interface';
import { ActivitiesSelector as Selector, ActivitiesActions as Action } from '@app/core/redux/activities/activities.index';
@Component({
  selector: 'app-list-activitites',
  templateUrl: './list-activitites.component.html',
  styleUrls: ['./list-activitites.component.scss'],
})
export class ListActivititesComponent implements OnInit, OnDestroy {
  public activities$: Observable<any> = new Observable();
  public activities: Activities[];
  public rows: number = 10;
  private subscribe: Subscription;

  constructor(
    private Store: Store<{ activitiesState: activitiesState }>
  ) {}  

  ngOnInit(): void {
    this.getAllActivities();
  }

  getAllActivities(){
    this.activities$ = this.Store.select(Selector.SelectStateAllData);
    this.subscribe = this.activities$.subscribe(
      (a:Activities[]) => this.activities = a
    );
    this.Store.dispatch(Action.getAllActivities());
  }

  delete(_id: number){
    //dialog.show(...)
    //if
      this.Store.dispatch(Action.deleteActivities( {id: _id} ));
      this.filterList(_id);
    //else
      //...
  }

  edit(_id: number){
    this.Store.dispatch(Action.getOneActivities( {id: _id} )); 
  }

  filterList(_id: number){
    this.activities = this.activities.filter(val => val.id != _id)
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }

}