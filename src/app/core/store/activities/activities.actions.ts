import { HttpErrorResponse } from '@angular/common/http';
import { Delete } from '@app/core/models/delete.interface';
import { ActivitiesResponse, ActivityResponse, NewActivity } from '@core/models/activities.interfaces';
import { createAction, props } from '@ngrx/store';

export const getAllActivities = createAction('[Activities] GetAll');
export const getOneActivities = createAction('[Activities] GetOne', props<{id: number}>());
export const insertActivities = createAction('[Activities] Insert', props<{body: NewActivity}>());
export const updateActivities = createAction('[Activities] Update', props<{id: number, body: NewActivity}>());
export const deleteActivities = createAction('[Activities] Delete', props<{id: number}>());
export const error = createAction('[Activities] Error');

//effects
export const responseGetAll = createAction('[Activities] Get All Response', props<{ response: ActivitiesResponse }>());
export const responseGetOne = createAction('[Activities] Get One Response', props<{ response: ActivityResponse }>());
export const responseInsert = createAction('[Activities] Insert Response' , props<{ response: ActivityResponse }>());
export const responseUpdate = createAction('[Activities] Update Response' , props<{ response: ActivityResponse }>());
export const responseDelete = createAction('[Activities] Delete Response' , props<{ response: Delete }>());
export const responseError  = createAction('[Activities] Error Response'  , props<{ response: HttpErrorResponse }>());

