import { Delete } from '@app/core/models/delete.interface';
import { Activities, NewActivity } from '@core/models/activities.interfaces';
import { createAction, props } from '@ngrx/store';

export enum type {
    GET_ALL_ACTIVITIES = '[Activities] Get All Activities',
    GET_ALL_ACTIVITIES_FAIL = '[Activities] Get All Activities Fail',
    GET_ALL_ACTIVITIES_SUCCESS = '[Activities] Get All Activities Success',
    GET_ONE_ACTIVITY = '[Activities] Get One Activities',
    GET_ONE_ACTIVITY_FAIL = '[Activities] Get One Activities Fail',
    GET_ONE_ACTIVITY_SUCCESS = '[Activities] Get One Activities Success',
    INSERT_ACTIVITY = '[Activities] Insert Activity',
    INSERT_ACTIVITY_FAIL = '[Activities] Insert Activity Fail',
    INSERT_ACTIVITY_SUCCESS = '[Activities] Insert Activity Success',
    UPDATE_ACTIVITY = '[Activities] Update Activity',
    UPDATE_ACTIVITY_FAIL = '[Activities] Update Activity Fail',
    UPDATE_ACTIVITY_SUCCESS = '[Activities] Update Activity Success',
    DELETE_ACTIVITY = '[Activities] Delete Activity',
    DELETE_ACTIVITY_FAIL = '[Activities] Delete Activity Fail',
    DELETE_ACTIVITY_SUCCESS = '[Activities] Delete Activity Success',
}

export const getAllActivities = createAction(type.GET_ALL_ACTIVITIES);
export const GetAllActivities_Fail= createAction(type.GET_ALL_ACTIVITIES_FAIL, props<{ error: any }>());
export const GetAllActivities_Success = createAction(type.GET_ALL_ACTIVITIES_SUCCESS, props<{ activities: Activities[] }>());

export const getOneActivities = createAction(type.GET_ONE_ACTIVITY, props<{id: number}>());
export const GetOneActivity_Fail= createAction(type.GET_ONE_ACTIVITY_FAIL, props<{ error: any }>());
export const GetOneActivity_Success = createAction(type.GET_ONE_ACTIVITY_SUCCESS, props<{ activity: Activities }>());

export const insertActivities = createAction(type.INSERT_ACTIVITY, props<{body: NewActivity}>());
export const InsertActivities_Fail = createAction(type.INSERT_ACTIVITY_FAIL , props<{ error: any }>());
export const InsertActivities_Success = createAction(type.INSERT_ACTIVITY_SUCCESS , props<{ activity: Activities }>());

export const updateActivities = createAction(type.UPDATE_ACTIVITY, props<{id: number, body: NewActivity}>());
export const UpdateActivities_Fail = createAction(type.UPDATE_ACTIVITY_FAIL, props<{ error: any }>());
export const UpdateActivities_Success = createAction(type.UPDATE_ACTIVITY_SUCCESS, props<{ activity: Activities }>());

export const deleteActivities = createAction(type.DELETE_ACTIVITY, props<{id: number}>());
export const DeleteActivity_Fail  = createAction(type.DELETE_ACTIVITY_FAIL, props<{ error: any }>());
export const DeleteActivity_Success = createAction(type.DELETE_ACTIVITY_SUCCESS, props<{ delete: Delete }>());
