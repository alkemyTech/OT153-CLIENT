import { getAllActivities } from './activities.actions';
import { activityReducer, activitiesState } from './activities.reducer';
import { getStateAllData } from './activities.selector';
import { ActivitiesEffects } from '@core/effects/activities.effects';

export const fromRoot = {
    getAllActivities, 
    activityReducer, 
    getStateAllData, 
    ActivitiesEffects
}