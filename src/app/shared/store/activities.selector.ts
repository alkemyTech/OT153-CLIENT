import { ActivitiesResponse } from '@app/core/models/activities.interfaces';
import { createSelector } from "@ngrx/store";
import { activitiesState } from './activities.reducer';

const getData = (state: activitiesState): ActivitiesResponse => state.response;

const getStateData = createSelector(
    (state: {activityState: activitiesState}) => state.activityState, getData
);

export { getStateData };