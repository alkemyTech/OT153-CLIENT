import { getAllActivities } from './activities.actions';
import { activityReducer, activitiesState } from './activities.reducer';
import { getStateData } from './activities.selector';
import { ActivitiesEffects } from '@core/effects/activities.effects';

export const fromRoot = {
    getAllActivities, 
    activityReducer, 
    getStateData, 
    ActivitiesEffects
}