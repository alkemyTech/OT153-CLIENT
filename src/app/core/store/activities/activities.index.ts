import { getAllActivities, getOneActivities, insertActivities, updateActivities, deleteActivities } from './activities.actions';
import { activityReducer } from './activities.reducer';
import { SelectStateAllData, SelectStateOneData, SelectStateDelete, SelectStateError } from './activities.selector';
import { ActivitiesEffects } from '@core/effects/activities.effects';

export const fromRoot = {
    getAllActivities,
    getOneActivities,
    insertActivities,
    updateActivities,
    deleteActivities,
    activityReducer,
    SelectStateAllData,
    SelectStateOneData,
    SelectStateDelete,
    SelectStateError,
    ActivitiesEffects,
}