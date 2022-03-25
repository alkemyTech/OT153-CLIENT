import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Activities } from '@app/core/models/activities.interfaces';
import { activitiesState } from '@app/core/models/activities-state.interface';
import { Store } from '@ngrx/store';
import { fromEvent, interval, Observable, timer } from 'rxjs';
import { ICard } from '@app/core/models/card.interfaces';
import {
  ActivitiesSelector as Selector,
  ActivitiesActions as Actions,
} from '@app/core/redux/activities/activities.index';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogType } from '@app/core/enums/dialog.enum';
import { DialogData } from '@app/core/models/dialog.inteface';
import { debounce, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { SearchInputService } from '@app/core/services/search-input.service';
import { Search } from '@app/core/models/search.models';
import { ProgressBarService } from '@app/core/services/progressbar.service';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss'],
})
export class ActivitiesCardComponent implements OnInit, AfterViewInit {
  public activities$: Observable<Activities[]> = new Observable();
  public error$: Observable<HttpErrorResponse> = new Observable();
  public search$: Observable<Search> = new Observable();
  public cards: ICard[];
  loading: boolean = true;
  searchLoading: boolean = false;
  noResult: boolean = false;
  @ViewChild('search', { static: true }) searchValue: ElementRef;

  constructor(
    private Store: Store<{ activitiesState: activitiesState }>,
    private dialogService: DialogService,
    private progressbarService: ProgressBarService
  ) {}

  ngOnInit() {
    this.activities$ = this.Store.select(Selector.SelectStateAllData);
    this.error$ = this.Store.select(Selector.SelectStateError);
    this.Store.dispatch(Actions.getAllActivities());
    this.alerts();
    this.progressbarService.setDisplay(true)
  }

  ngAfterViewInit(): void {
    this.listenSearchInput();
    timer(3000).subscribe(() => {
      this.loading = false;
      this.progressbarService.setDisplay(false)
    });
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
        let dialog: DialogData = { type: DialogType.ERROR, header: 'ERROR', content: e.message };
        this.dialogService.show(dialog);
      }
    });
  }

  listenSearchInput(): void {
    fromEvent(this.searchValue.nativeElement, 'keyup')
      .pipe(debounce(() => interval(600)))
      .subscribe((event) => {
        let char = event as { key };
        if (/[a-zA-Z]/.test(char.key)) {
          this.Store.dispatch(Actions.searchActivities({ value: this.searchValue.nativeElement.value }));
          this.loading = true;
          this.searchLoading = true;
          this.noResult = false;
        }
      });

    fromEvent(this.searchValue.nativeElement, 'keyup')
      .pipe(debounceTime(2300))
      .subscribe({
        next: (event) => {
          let char = event as { key };
          if (/[a-zA-Z]/.test(char.key)) {
            this.loading = false;
          }
        },
      });

    fromEvent(this.searchValue.nativeElement, 'keyup')
      .pipe(
        // if search returns nothing
        debounceTime(2500)
      )
      .subscribe({
        next: (event) => {
          let char = event as { key };
          if (/[a-zA-Z]/.test(char.key)) {
            this.noResult = true;
          }
        },
      });
  }
}
