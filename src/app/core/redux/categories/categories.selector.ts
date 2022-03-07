import { createSelector } from "@ngrx/store";
import { categoriesState } from '../../models/category.interface';

export interface appState {
  categoriesState: categoriesState
}

const getAllCategories = (state: categoriesState) => state

const SelectAllCategories = createSelector(
  (state: appState) => state.categoriesState, getAllCategories
);

export { 
  SelectAllCategories
};
