import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';
import { Activities } from '@app/core/models/activities.interfaces';
import { activitiesState } from '@app/core/store/activities/activityState.interface';
import { fromRoot } from '@app/core/store/activities/activities.index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICard } from '@app/core/models/card.interfaces';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss'],
})
export class ActivitiesCardComponent implements OnInit {
  url = 'http://ongapi.alkemy.org/api/activities';
  public activities$: Observable<Activities[]> = new Observable();
  public cards: ICard[]

  constructor(private Store: Store<{ activitiesState: activitiesState }>) {}

  ngOnInit() {
    this.activities$ = this.Store.select(fromRoot.SelectStateAllData)
    this.Store.dispatch(fromRoot.getAllActivities());
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

