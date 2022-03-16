import { Component, OnInit, OnDestroy } from '@angular/core';
import { New, NewResponse, NewsResponse } from '@app/core/models/news.interfaces';
import { Observable, Subscription } from 'rxjs';
import { NewsControllerService } from '@app/core/controllers/news-controller.service';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogType } from '@app/core/enums/dialog.enum';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit, OnDestroy {
  public news$: Observable<NewsResponse> = new Observable();
  private dialogSelection$: Observable<boolean>;
  private subscribeNews: Subscription;
  private subscribeDialogSelection: Subscription;
  public news: New[];
  private _idDelete: number;
  public rows: number = 10;

  constructor( 
    private controller:NewsControllerService,
    public dialog: DialogService
  ) {}  

  ngOnInit(): void {
    this.delete_dialogSubscribe();
    this.setDialogObservables();
    this.getAllNews();
  }

  delete_dialogSubscribe() {
    this.dialogSelection$ = this.dialog.DialogSelectionObservable;
  }

  setDialogObservables() {
    this.subscribeDialogSelection = this.dialogSelection$.subscribe(
      resp => {
        if (resp) {
          this.controller.delete(this._idDelete);
          this.filterList(this._idDelete);
          console.log('Eliminacion',this._idDelete);
        }
        this._idDelete=-1
      }
    )
  }

  getAllNews(){
    this.news$ = this.controller.getAll();
    this.subscribeNews = this.news$.subscribe({
      next: resp => { this.news = resp.data }
    });
  }

  deleteDialog(_id: number){
    this._idDelete = _id;
    this.dialog.show({ 
      type: DialogType.CONFIRM, 
      header: 'Eliminar Novedad '+_id, content:'Seguro que quiere eliminar esta novedadd?', 
      btnOk:'Eliminar', btnCancel:'Cancelar'
    })
  }

  filterList(_id: number){
    this.news = this.news.filter(val => val.id != _id)
  }

  ngOnDestroy(): void {
    this.subscribeNews.unsubscribe;
    this.subscribeDialogSelection.unsubscribe;
  }
}
