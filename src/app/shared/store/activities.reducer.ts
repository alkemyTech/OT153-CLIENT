import { ActivitiesResponse } from '@app/core/models/activities.interfaces';
import { createReducer, on } from '@ngrx/store';
import { responseActivities } from './activities.actions';

export interface activitiesState {
    response : ActivitiesResponse;
}

const initialState: activitiesState = {
    response : {},
};
 
const _activityReducer = createReducer(
  initialState,
  on( responseActivities, (state, action) => ( {response : action.response} ) ),
);
 
export function activityReducer(state, action) {
  return _activityReducer(state, action);
}