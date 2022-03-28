import { createAction, props } from '@ngrx/store';
import { fullCategoryData } from '@models/category.interface';

export const listCategories = createAction('[Categories] List Categories');

export const listCategoriesSuccess = createAction(
  '[Categories] List Categories Success',
  props<{ categories: fullCategoryData[] }>()
);

export const listCategoriesError = createAction(
  '[Categories] List Categories Error',
  props< {payload: any} >()
);
