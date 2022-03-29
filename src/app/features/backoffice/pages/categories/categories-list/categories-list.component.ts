import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { categoriesState, fullCategoryData } from '@core/models/category.interface';
import { SelectAllCategories } from '@core/redux/categories/categories.selector';
import { getCategoryByName, listCategories } from '@core/redux/categories/categories.actions';
import { Observable, Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'alk-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  public categories$: Observable<any> = new Observable();
  categories: fullCategoryData[] = [];
  loading: boolean = false;
  private debouncer: Subject<string> = new Subject();
  
  constructor( private store: Store<categoriesState> ) {}

  ngOnInit(): void {
    this.loading = true;
    this.store.dispatch(listCategories());
    this.categories$ = this.store.select(SelectAllCategories).pipe(
      tap(
        () => this.loading = false
      )
    )
    this.getCategories();

    
    this.debouncer
      .pipe(
        debounceTime(600),
        tap( (name)=> {
          if(name.length > 0){
            this.loading = true;
          }
        }),
      )
        .subscribe((name) => {
          this.searchCategories(name);
      });
  }

  getCategories(){
    this.store.select( SelectAllCategories ).subscribe(resp => {
      this.categories = resp.categories;
      this.loading = false;
    })    
  }

  keyup(name: string){
    this.debouncer.next(name)
  }

  searchCategories(name: string){
    if(name.length >= 2){
      this.store.dispatch( getCategoryByName({name}));
    }else{
      this.store.dispatch( listCategories() );
    }
  }

}
