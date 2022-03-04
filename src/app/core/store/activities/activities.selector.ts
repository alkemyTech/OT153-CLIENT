import { ActivitiesResponse, ActivityResponse } from '@app/core/models/activities.interfaces';
import { createSelector } from "@ngrx/store";
import { activitiesState } from './activities.reducer';

const getAllData = (state: activitiesState): ActivitiesResponse | {} => state.responseAll;
const getOneData = (state: activitiesState): ActivityResponse | {} => state.response;

const getStateAllData = createSelector(
    (state: { activityState: activitiesState }) => state.activityState, getAllData
);
const getStateOneData = createSelector(
    (state: { activityState: activitiesState }) => state.activityState, getOneData
)


export { getStateAllData };