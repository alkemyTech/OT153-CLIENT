import { createSelector } from "@ngrx/store";
import { activitiesState } from '@app/core/store/activities/activityState.interface';

export interface appState {
    activitiesState: activitiesState
}

const selectFeature = (state: appState) => state.activitiesState

const selectAllData = (state: activitiesState) => state.responseAll;

const selectOneData = (state: activitiesState) => state.response;

const selectDelete = (state: activitiesState) => state.delete;

const selectErrorActivity = (state: activitiesState) => state.error;

const SelectStateAllData = createSelector(
    (state: appState) => state.activitiesState, selectAllData
);
const SelectStateOneData = createSelector(
    (state: appState) => state.activitiesState, selectOneData
);
const SelectStateDelete = createSelector(
    (state: appState) => state.activitiesState, selectDelete
);
const SelectStateError = createSelector(
    (state: appState) => state.activitiesState, selectErrorActivity
);

export { SelectStateAllData, SelectStateOneData, SelectStateDelete, SelectStateError };