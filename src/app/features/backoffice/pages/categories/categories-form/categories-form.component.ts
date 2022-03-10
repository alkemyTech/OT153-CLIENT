import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fullCategoryDate } from '@core/models/category.interface';
import { listCategories } from '@core/redux/categories/categories.actions';
import { SelectAllCategories } from '@core/redux/categories/categories.selector'

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss'],
})
export class CategoriesFormComponent implements OnInit {

  categories: fullCategoryDate[];
  loading: boolean = false;
  loaded: boolean = false;
  error: any = null;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select(SelectAllCategories).subscribe( ({categories, error, loaded, loading}) => {
      this.categories = categories;
      this.loading = loading;
      this.loaded = loaded;
      this.error = error;
    })

    this.store.dispatch(listCategories())
  }
}
