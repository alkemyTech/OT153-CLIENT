import { responseUpdate, responseError, responseDelete, responseGetAll, responseGetOne, responseInsert } from '@app/core/store/activities/activities.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivitiesResponse, ActivityResponse } from '@app/core/models/activities.interfaces';
import { Delete } from '@app/core/models/delete.interface';
import { createReducer, on } from '@ngrx/store';

export interface activitiesState {
    responseAll : ActivitiesResponse;
    response : ActivityResponse;
    delete : Delete;
    error : HttpErrorResponse;
};

const emptyResponse = { success: false , data: undefined, message: '' };
const emptyDelete= { success: false , data: '', message: '' }
const errorEmpty= new HttpErrorResponse({})

const initialState: activitiesState = {
  responseAll: emptyResponse,
  response: emptyResponse,
  delete: emptyDelete,
  error: errorEmpty,
};
 
const _activityReducer = createReducer(
  initialState,
  on( responseGetAll, (state, action) => ( { responseAll : action.response, response: emptyResponse, delete: emptyDelete, error: errorEmpty } ) ),
  on( responseGetOne, (state, action) => ( { responseAll : emptyResponse, response: action.response, delete: emptyDelete, error: errorEmpty } ) ),
  on( responseInsert, (state, action) => ( { responseAll : emptyResponse, response: action.response, delete: emptyDelete, error: errorEmpty } ) ),
  on( responseUpdate, (state, action) => ( { responseAll : emptyResponse, response: action.response, delete: emptyDelete, error: errorEmpty } ) ),
  on( responseDelete, (state, action) => ( { responseAll : emptyResponse, response: emptyResponse, delete: action.response, error: errorEmpty } ) ),
  on( responseError, (state, action) => ( { responseAll : emptyResponse, response: emptyResponse, delete: emptyDelete, error: action.response } ) ),

);
 
export function activityReducer(state, action) {
  return _activityReducer(state, action);
}