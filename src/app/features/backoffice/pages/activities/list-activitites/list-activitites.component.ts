import { DialogService } from '@core/services/dialog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Activities } from '@app/core/models/activities.interfaces';
import { activitiesState } from '@core/models/activities-state.interface';
import { ActivitiesSelector as Selector, ActivitiesActions as Action } from '@app/core/redux/activities/activities.index';
import { DialogType } from '@app/core/enums/dialog.enum';
import { SearchInputService } from '@app/core/services/search-input.service';
import { Search } from '@app/core/models/search.models';
@Component({
  selector: 'app-list-activitites',
  templateUrl: './list-activitites.component.html',
  styleUrls: ['./list-activitites.component.scss'],
})
export class ListActivititesComponent implements OnInit, OnDestroy {
  public activities$: Observable<any> = new Observable();
  public dialogSelection$: Observable<boolean>;
  public searchObserver$: Observable<Search>;
  private subscribeActivity: Subscription;
  private subscribeDialogSelection: Subscription;
  private subscribeSearchActivities: Subscription;
  public activities: Activities[];
  private _idDelete: number;
  public rows: number = 10;

  constructor(
    private Store: Store<{ activitiesState: activitiesState }>, 
    public dialog: DialogService,
    public searchServices: SearchInputService
  ) {}  

  ngOnInit(): void {
    this.setDialogObservables();
    this.delete_dialogSubscribe();
    this.activitiesSubscribe()
    this.searchSubscribe();
  }

  private setDialogObservables() {
    this.dialogSelection$ = this.dialog.DialogSelectionObservable;
  }

  private activitiesSubscribe(){
    this.activities$ = this.Store.select(Selector.SelectStateAllData);
    this.subscribeActivity = this.activities$.subscribe({
      next:(activities:Activities[]) => {
        this.activities = activities;
      }
    });
  }

  private searchSubscribe() {
    this.searchObserver$ = this.searchServices.SearchObservable;
    this.subscribeSearchActivities = this.searchObserver$.subscribe({
      next: (resp) => { this.search(resp.load, resp.search); }
    })
  }

  private search(load?: boolean, search?: string){
    if(load === true) { 
      this.searchActivities(search || '');
    }else{
      this.getActivities();
    }
  }

  private getActivities() {
    this.Store.dispatch(Action.getAllActivities());
  }

  private searchActivities(search: string){
    this.Store.dispatch(Action.searchActivities({value: search}));
  }

  private delete_dialogSubscribe(){
    this.subscribeDialogSelection = this.dialogSelection$.subscribe(
      resp => {
        if (resp) {
          this.Store.dispatch(Action.deleteActivities( {id: this._idDelete} ));
          this.filterList(this._idDelete);
        }
        this._idDelete=-1
      }
    )
  }

  deleteDialog(_id: number){
    this._idDelete = _id;
    this.dialog.show({ 
      type: DialogType.CONFIRM, 
      header: 'Eliminar Actividad '+_id, content:'Seguro que quiere eliminar esta actividad?', 
      btnOk:'Eliminar', btnCancel:'Cancelar'
    })
  }

  edit(_id: number){
    this.Store.dispatch(Action.getOneActivities( {id: _id} )); 
  }

  filterList(_id: number){
    this.activities = this.activities.filter(val => val.id != _id);
  }

  ngOnDestroy(): void {
    this.subscribeActivity.unsubscribe;
    this.subscribeDialogSelection.unsubscribe;
    this.subscribeSearchActivities.unsubscribe;
  }

}

//! 10011