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
import { HttpErrorResponse } from '@angular/common/http';
import { DialogData } from '@app/core/models/dialog.inteface';

@Component({
  selector: 'app-list-activitites',
  templateUrl: './list-activitites.component.html',
  styleUrls: ['./list-activitites.component.scss'],
})
export class ListActivititesComponent implements OnInit, OnDestroy {
  public activities$: Observable<any> = new Observable();
  public error$: Observable<any> = new Observable();
  public dialogSelection$: Observable<boolean>;
  public searchObserver$: Observable<Search>;
  private subscriptions: Subscription[] = [];
  public error : HttpErrorResponse;
  public activities: Activities[];
  private _idDelete: number;
  public rows: number = 10;

  constructor(
    private Store: Store<{ activitiesState: activitiesState }>, 
    public dialog: DialogService,
    public searchServices: SearchInputService,
  ) {}  

  ngOnInit(): void {
    this.setDialogObservables();
    this.activitiesSubscribe()
    this.searchSubscribe();
    this.errorSubscribe();
  }

  private setDialogObservables() {
    this.dialogSelection$ = this.dialog.DialogSelectionObservable;
  }

  private activitiesSubscribe(){
    this.activities$ = this.Store.select(Selector.SelectStateAllData);
    const subscribeActivity = this.activities$.subscribe({
      next:(activities:Activities[]) => {
        this.activities = activities;
      }
    });
    this.subscriptions.push(subscribeActivity);
  }

  private errorSubscribe(){
    this.error$ = this.Store.select(Selector.SelectStateError);
    const subscribeError = this.error$.subscribe({
      next:(error: HttpErrorResponse)=> {
        if(error.status === 404){
        let dialog: DialogData = { type: DialogType.ERROR, header: 'ERROR', content: 
        `Hubo un error en la carga de actividades` 
        };
        this.dialog.show(dialog);}
      }
    })
    this.subscriptions.push(subscribeError)
  }

  private searchSubscribe() {
    this.searchObserver$ = this.searchServices.SearchObservable;
    const subscribeSearchActivities = this.searchObserver$.subscribe({
      next: (resp) => { this.search(resp.load, resp.search); }
    });
    this.subscriptions.push(subscribeSearchActivities)
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
    const subscribeDialogSelection = this.dialogSelection$.subscribe(
      resp => {
        if (resp && this._idDelete && this._idDelete != -1) {
          this.Store.dispatch(Action.deleteActivities( {id: this._idDelete} ));
          this.filterList(this._idDelete);
        }
        this._idDelete=-1
      }
    );
    this.subscriptions.push(subscribeDialogSelection)
  }

  deleteDialog(_id: number){
    this.delete_dialogSubscribe();
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
    this.subscriptions.map( s => s.unsubscribe());
  }

}

//! 10011