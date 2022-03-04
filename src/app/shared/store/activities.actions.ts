import { ActivitiesResponse } from '@core/models/activities.interfaces';
import { createAction, props } from '@ngrx/store';

export const getAllActivities = createAction('[Activities] GetAll');
export const responseActivities = createAction('[Activities] Response', props<{ response: ActivitiesResponse }>())