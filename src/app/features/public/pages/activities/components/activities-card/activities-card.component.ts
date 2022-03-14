import { Component, OnInit } from '@angular/core';
import { Activities } from '@app/core/models/activities.interfaces';
import { activitiesState } from '@app/core/models/activities-state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICard } from '@app/core/models/card.interfaces';
import {
  ActivitiesSelector as Selector,
  ActivitiesActions as Actions,
} from '@app/core/redux/activities/activities.index';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogType } from '@app/core/enums/dialog.enum';
import { DialogData } from '@app/core/models/dialog.inteface';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss'],
})
export class ActivitiesCardComponent implements OnInit {
  public activities$: Observable<Activities[]> = new Observable();
  public error$: Observable<HttpErrorResponse> = new Observable();
  public cards: ICard[];
  loading: boolean = true;

  constructor(private Store: Store<{ activitiesState: activitiesState }>, private dialogService: DialogService) {}

  ngOnInit() {
    this.activities$ = this.Store.select(Selector.SelectStateAllData);
    this.error$ = this.Store.select(Selector.SelectStateError);
    this.Store.dispatch(Actions.getAllActivities());
    this.alerts();
  }

  ActivitieToICard(activitie: Activities): ICard {
    let ICard: ICard = {
      name: activitie.name,
      description: activitie.description,
      image: activitie.image,
    };
    return ICard;
  }

  alerts(): void {
    this.error$.subscribe((e) => {
      if (e.error) {
        console.log(e);
        let dialog: DialogData = { type: DialogType.ERROR, header: 'ERROR', content: e.message };
        this.dialogService.show(dialog);
      }
    });
  }

  getLoading(): void {
    this.activities$.subscribe((res) => {
      if (res.length < 1) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    });
  }
}
