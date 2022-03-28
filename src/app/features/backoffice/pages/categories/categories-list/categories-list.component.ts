import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { categoriesState, fullCategoryData } from '@core/models/category.interface';
import { SelectAllCategories } from '@core/redux/categories/categories.selector';
import { listCategories } from '@core/redux/categories/categories.actions';

@Component({
  selector: 'alk-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: fullCategoryData[] = [];
  loading: boolean = false;

  constructor( private store: Store<categoriesState> ) {}

  ngOnInit(): void {
    this.loading = true;
    this.store.dispatch(listCategories());
    this.getCategories();
  }

  getCategories(){
    this.store.select( SelectAllCategories ).subscribe(resp => {
      this.categories = resp.categories;
      this.loading = false;
    })    
  }

}
