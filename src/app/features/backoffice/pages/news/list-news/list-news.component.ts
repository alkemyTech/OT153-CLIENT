import { Component, OnInit, OnDestroy } from '@angular/core';
import { New, NewsResponse } from '@app/core/models/news.interfaces';
import { Observable, Subscription } from 'rxjs';
import { NewsControllerService } from '@app/core/controllers/news-controller.service';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';


@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit, OnDestroy {
  public news$: Observable<NewsResponse> = new Observable();
  private dialogSelection$: Observable<boolean>;
  private subscriptions: Subscription[] = [];
  public news: New[];
  private _idDelete: number;
  public rows: number = 10;
  private clickDelete: boolean = false;

  constructor( 
    private controller:NewsControllerService,
    public dialogService: DialogService
  ) {}  

  ngOnInit(): void {
    this.delete_dialogSubscribe();
    this.setDialogObservables();
    this.getAllNews();
  }

  delete_dialogSubscribe() {
    this.dialogSelection$ = this.dialogService.DialogSelectionObservable;
  }

  setDialogObservables() {
    const subscribeDialogSelection = this.dialogSelection$.subscribe(
      resp => {
        if (resp && this.clickDelete) {
          this.controller.delete(this._idDelete);
          this.filterList(this._idDelete);
        }
        this._idDelete=-1;
        this.clickDelete = false;
      }
    )
    this.subscriptions.push(subscribeDialogSelection);
  }

  getAllNews(){
    this.news$ = this.controller.getAll();
    const subscribeNews = this.news$.subscribe({
      next: resp => { this.news = resp.data },
      error: err => {
        let dialog: DialogData = { 
          type: DialogType.ERROR, 
          header: 'Error', 
          content: 'Error al realizar la petición. Intente nuevamente.'
        };
        this.dialogService.show(dialog);
      }
    });
    this.subscriptions.push(subscribeNews);
  }

  deleteDialog(_id: number){
    this._idDelete = _id;
    this.clickDelete = true;
    this.dialogService.show({ 
      type: DialogType.CONFIRM, 
      header: 'Eliminar Novedad '+_id, content:'Seguro que quiere eliminar esta novedadd?', 
      btnOk:'Eliminar', btnCancel:'Cancelar'
    })
  }

  filterList(_id: number){
    this.news = this.news.filter(val => val.id != _id)
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }
}
