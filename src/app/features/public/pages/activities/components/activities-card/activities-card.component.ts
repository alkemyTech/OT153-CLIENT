import { Component, OnInit } from '@angular/core';
import { Activities } from '@app/core/models/activities.interfaces';
import { activitiesState } from '@app/core/models/activities-state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICard } from '@app/core/models/card.interfaces';
import { ActivitiesSelector as Selector, ActivitiesActions as Actions } from '@app/core/redux/activities/activities.index';


@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss'],
})
export class ActivitiesCardComponent implements OnInit {
  public activities$: Observable<Activities[]> = new Observable();
  public cards: ICard[]

  constructor(private Store: Store<{ activitiesState: activitiesState }>) {}

  ngOnInit() {
    this.activities$ = this.Store.select(Selector.SelectStateAllData)
    this.Store.dispatch(Actions.getAllActivities());
  }

  ActivitieToICard(activitie:Activities){
    let ICard:ICard= {
      name: activitie.name,
      description: activitie.description,
      image: activitie.image,
    }; 
    return ICard;
  }

}

