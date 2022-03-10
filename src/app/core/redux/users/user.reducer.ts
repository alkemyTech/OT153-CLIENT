import { HttpErrorResponse } from '@angular/common/http';
import { Delete } from '@app/core/models/delete.interface';
import { createReducer, on } from '@ngrx/store';
import { User, Users, UserData } from '@app/core/models/users.interfaces';
import * as action from '@app/core/redux/users/user.actions';
import { userState } from '@app/core/models/user-state.interface';


const userEmpty: UserData = { name: '', email: '' };
const usersEmpty: UserData[] = [{ name: '', email: '' }];
const userResponseEmpty: User = { success: false, data: userEmpty, message: '' };
const usersResponseEmpty: Users = { success: false, data: usersEmpty, message: '' };
const deleteEmpty: Delete = { success: false, data: '', message: '' };
const errorEmpty = new HttpErrorResponse({});
const initialState: userState = {
  responseAll: usersResponseEmpty,
  response: userResponseEmpty,
  error: errorEmpty,
  delete: deleteEmpty,
};

export const _userReducer = createReducer(
  initialState,
  on(action.getUsersSuccess, (state,action) => {return {...state, responseAll: action.users}}),
  on(action.getUsersFail, (state,action)=> {return {...state,error:action.error}}),

  on(action.getUserSuccess, (state,action) => {return {...state, response:action.user}}),
  on(action.getUserFail, (state,action) => {return {...state, error:action.error}}),

  on(action.updateUserSuccess,(state,action) => {return {...state,response:action.user}}),
  on(action.updateUserFail, (state,action) => {return {...state,error:action.error}}),

  on(action.deleteUserSuccess,(state,action) => {return {...state,delete: action.delete}}),
  on(action.deleteUserFail,(state,action) => {return {...state,error: action.error}})

);

export function userReducer(state,action){
  return _userReducer(state,action);
}