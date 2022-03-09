import { createFeatureSelector, createSelector } from "@ngrx/store";
import { categoriesState } from '@models/category.interface';

const featureKey = 'listCategories';

const getCategoriesState = createFeatureSelector<categoriesState>(featureKey);

const getAllCategories = (state: categoriesState) => state

const SelectAllCategories = createSelector(
  getCategoriesState,
  (state: categoriesState) => state,
);

export { 
  SelectAllCategories
};
