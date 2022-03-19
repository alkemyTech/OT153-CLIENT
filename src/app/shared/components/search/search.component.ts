import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { SearchInputService } from '@app/core/services/search-input.service'
import { Search } from '@app/core/models/search.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef;
  public SearchObserver$: Observable<Search>;
  public load: boolean;
  public value: string;

  constructor( public searchService: SearchInputService) { 
    this.load = false;
    this.value = '';
  } 

  ngOnInit(): void {
    this.SearchObserver$ = this.searchService.SearchObservable
    this.SearchObserver$.subscribe({
      next: (resp)=> {
        this.load =  resp.load;
      }
    })
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement,'keyup')
    .pipe(
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
    )
    .subscribe({   
      next: () => { 
        this.searchService.Search = this.value;
        setTimeout(() => this.load = false , 1300); // jaja
      }
    });
  }

}

//! 10011