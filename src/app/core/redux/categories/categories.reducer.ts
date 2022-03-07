import { createReducer, on } from '@ngrx/store';
import * as actions from './categories.actions';
import { categoriesState } from '@models/category.interface';

const initialState: categoriesState = {
  categories: [],
  loaded: false,
  loading: false,
  error: null
};

const _categoriesReducer = createReducer(
  initialState,
  on( actions.listCategories, state => ({ ...state, loading: true}) ),

  on(actions.listCategoriesSuccess, (state, {categories}) => ({
    ...state,
    loading: false,
    loaded: true,
    categories
  }) ),

  on(actions.listCategoriesError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      status: payload.status,
      statusText: payload.statusText,
      url: payload.url,
      ok: payload.ok,
      message: payload.message
    }
  }) )
);

export function categoriesReducer(state, action) {
  return _categoriesReducer(state, action);
};
