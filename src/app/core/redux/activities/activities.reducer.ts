import { 
  DeleteActivity_Success, GetAllActivities_Success, 
  GetOneActivity_Success, InsertActivities_Success, 
  UpdateActivities_Success, GetAllActivities_Fail, 
  GetOneActivity_Fail, DeleteActivity_Fail, 
  InsertActivities_Fail, UpdateActivities_Fail,
} from './activities.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { activitiesState } from '@app/core/models/activities-state.interface';

const emptyArray= [];
const emptyOne=  {id: 0, name: '', description:''};
const emptyDelete= { success: false , data: '', message: '' };
const errorEmpty= new HttpErrorResponse({});

const initialState: activitiesState = {
  responseAll: emptyArray,
  response: emptyOne,
  delete: emptyDelete,
  error: errorEmpty,
};
 
export const _activityReducer = createReducer( initialState,
  on( GetAllActivities_Success, (state, action) => { return {...state, responseAll: action.activities } }),
  on( GetAllActivities_Fail, (state, action) =>  { return {...state, error: action.error } }  ),
  on( GetOneActivity_Success, (state, action) => { return {...state, response: action.activity } }  ),
  on( GetOneActivity_Fail, (state, action) => { return {...state, error: action.error } } ),
  on( InsertActivities_Success, (state, action) => { return {...state, response: action.activity } }  ),
  on( InsertActivities_Fail, (state, action) => { return {...state, error: action.error } } ),
  on( UpdateActivities_Success, (state, action) => { return {...state, response: action.activity } }  ),
  on( UpdateActivities_Fail, (state, action) => { return {...state, error: action.error } } ),
  on( DeleteActivity_Success, (state, action) => { return {...state, delete: action.delete } }  ),
  on( DeleteActivity_Fail, (state, action) => { return {...state, error: action.error } } ),
);
 
export function activityReducer(state, action) {
  return _activityReducer(state, action);
}
