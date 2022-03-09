import { createAction, props } from '@ngrx/store';
import { fullCategoryDate } from '@models/category.interface';

export const listCategories = createAction('[Categories] List Categories');

export const listCategoriesSuccess = createAction(
  '[Categories] List Categories Success',
  props<{ categories: fullCategoryDate[] }>()
);

export const listCategoriesError = createAction(
  '[Categories] List Categories Error',
  props< {payload: any} >()
);
