import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Search } from '@core/models/search.models';
@Injectable({
  providedIn: 'root'
})
export class SearchInputService {
  private lengthDebounce = 3;
  private initialSearch: Search = { search: '',  load: false };
  private searchObservable: BehaviorSubject<Search> = new BehaviorSubject<Search>( this.initialSearch );

  constructor() { }
  
  get SearchObservable(): Observable<Search>{
    return this.searchObservable.asObservable();
  }

  set Search( newSearch : string ){
    let flagLength = ( newSearch.length >= this.lengthDebounce );
    this.searchObservable.next({ search: newSearch, load: flagLength });
  }

}
