import { createAction, props } from '@ngrx/store';
import { fullCategoryData, respFullCategories, respSimpleCategories } from '@models/category.interface';

export const listCategories = createAction('[Categories] List Categories');

export const listCategoriesSuccess = createAction(
  '[Categories] List Categories Success',
  props<{ categories: fullCategoryData[] }>()
);

export const listCategoriesError = createAction(
  '[Categories] List Categories Error',
  props< {payload: any} >()
);

export const getCategoryByName = createAction('[Categories] Get Categories By Name', props<{ name: string }>());
export const getCategoryByNameSuccess = createAction('[Categories] Get Categories By Name Success', props<{ response: respFullCategories }>());
export const getCategoryByNameFail = createAction('[Categories] Get Categories By Name Fail', props<{error: any}>())

