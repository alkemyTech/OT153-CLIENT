import { Activities} from '@app/core/models/activities.interfaces';
import { createSelector } from "@ngrx/store";
import { activitiesState } from './activities.reducer';

export interface appState {
    activitiesState: activitiesState
}

const selectFeature = (state: appState) => state.activitiesState

const selectAllData = (state: activitiesState) => state.responseAll;

const selectOneData = (state: activitiesState) => state.response;

const SelectStateAllData = createSelector(
    (state: appState ) => state.activitiesState, selectAllData
);
const SelectStateOneData = createSelector(
    (state: appState) => state.activitiesState, selectOneData
)

export { SelectStateAllData, SelectStateOneData };