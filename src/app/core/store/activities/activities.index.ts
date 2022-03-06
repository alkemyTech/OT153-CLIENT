import { getAllActivities, GetAllActivities_Success, getOneActivities } from './activities.actions';
import { activityReducer, activitiesState } from './activities.reducer';
import { SelectStateAllData, SelectStateOneData } from './activities.selector';
import { ActivitiesEffects } from '@core/effects/activities.effects';

export const fromRoot = {
    getAllActivities,
    getOneActivities,
    activityReducer,
    SelectStateAllData,
    SelectStateOneData,
    ActivitiesEffects
}