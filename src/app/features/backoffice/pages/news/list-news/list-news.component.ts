import { Component, OnInit, OnDestroy } from '@angular/core';
import { New, NewResponse, NewsResponse } from '@app/core/models/news.interfaces';
import { Observable, Subscription } from 'rxjs';
import { NewsControllerService } from '@app/core/controllers/news-controller.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit, OnDestroy {
  public news$: Observable<NewsResponse> = new Observable();
  public news: New[];
  public rows: number = 10;
  private subscribe: Subscription;

  constructor( private controller:NewsControllerService ) {}  

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews(){
    this.news$ = this.controller.getAll();
    this.subscribe = this.news$.subscribe({
      next: resp => { this.news = resp.data }
    });
  }

  delete(_id: number){
    this.controller.delete(_id);
    this.filterList(_id);
  }

  filterList(_id: number){
    this.news = this.news.filter(val => val.id != _id)
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
}
