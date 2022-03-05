import { deleteActivities, DeleteActivity_Success, GetAllActivities_Success, GetOneActivity_Success, InsertActivities_Success, UpdateActivities_Success, GetAllActivities_Fail, GetOneActivity_Fail, DeleteActivity_Fail, InsertActivities_Fail, UpdateActivities_Fail } from './activities.actions';
import {  } from '@app/core/store/activities/activities.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Activities, ActivitiesResponse, ActivityResponse } from '@app/core/models/activities.interfaces';
import { Delete } from '@app/core/models/delete.interface';
import { createReducer, on } from '@ngrx/store';

export interface activitiesState {
    responseAll : Array<Activities>;
    response : Activities;
    delete : Delete;
    error : HttpErrorResponse;
};

const emptyArray= Array<Activities>();
const emptyOne=  {id: 0, name: '', description:''};
const emptyDelete= { success: false , data: '', message: '' };
const errorEmpty= new HttpErrorResponse({});

const initialState: activitiesState = {
  responseAll: emptyArray,
  response: emptyOne,
  delete: emptyDelete,
  error: errorEmpty,
};
 
const _activityReducer = createReducer(
  initialState,
  on( GetAllActivities_Success, (state, action) => ( { responseAll : action.activities, response: emptyOne, delete: emptyDelete, error: errorEmpty } ) ),
  on( GetAllActivities_Fail, (state, action) => ( { responseAll : emptyArray, response: emptyOne, delete: emptyDelete, error: action.error } ) ),
  on( GetOneActivity_Success, (state, action) => ( { responseAll : emptyArray, response: action.activity, delete: emptyDelete, error: errorEmpty } ) ),
  on( GetOneActivity_Fail, (state, action) => ( { responseAll : emptyArray, response: emptyOne, delete: emptyDelete, error: action.error } ) ),
  on( InsertActivities_Success, (state, action) => ( { responseAll : emptyArray, response: action.activity, delete: emptyDelete, error: errorEmpty } ) ),
  on( InsertActivities_Fail, (state, action) => ( { responseAll : emptyArray, response: emptyOne, delete: emptyDelete, error: action.error } ) ),
  on( UpdateActivities_Success, (state, action) => ( { responseAll : emptyArray, response: action.activity, delete: emptyDelete, error: errorEmpty } ) ),
  on( UpdateActivities_Fail, (state, action) => ( { responseAll : emptyArray, response: emptyOne, delete: emptyDelete, error: action.error } ) ),
  on( DeleteActivity_Success, (state, action) => ( { responseAll : emptyArray, response: emptyOne, delete: action.delete, error: errorEmpty } ) ),
  on( DeleteActivity_Fail, (state, action) => ( { responseAll : emptyArray, response: emptyOne, delete: emptyDelete, error: action.error } ) ),

);
 
export function activityReducer(state, action) {
  return _activityReducer(state, action);
}