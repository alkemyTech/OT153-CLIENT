import { createAction, props } from '@ngrx/store';
import { Users, User, UserData} from '@app/core/models/users.interfaces';
import { Delete } from '@app/core/models/delete.interface';
export enum type {
  GET_USERS = '[ User ] Get All Users',
  GET_USERS_FAIL = '[ User ] Get All Users Fail',
  GET_USERS_SUCCESS = '[ User ] Get All Users Success',

  SEARCH_USERS = '[User] Search Users',
  SEARCH_USERS_FAIL = '[User] Search Users Fail',
  SEARCH_USERS_SUCCESS = '[User] Search Users Success',

  GET_USER = '[ User ] Get A User',
  GET_USER_FAIL = '[ User ] Get A User Fail',
  GET_USER_SUCCESS = '[ User ] Get A User Success',

  POST_USER = '[ User ] Post A User',
  POST_USER_FAIL = '[ User ] Post A User Fail',
  POST_USER_SUCCESS = '[ User ] Post A User Success',

  UPDATE_USER = '[ User ] Update User',
  UPDATE_USER_FAIL = '[ User ] Update User Fail',
  UPDATE_USER_SUCCESS = '[ User ] Update User Succes',

  DELETE_USER = '[ User ] Delete User',
  DELETE_USER_FAIL = '[ User ] Delete User Fail',
  DELETE_USER_SUCCESS = '[ User ] Delete User Success',
}

export const getUsers = createAction(type.GET_USERS);
export const getUsersSuccess = createAction(type.GET_USERS_SUCCESS, props<{ users: Users }>());
export const getUsersFail = createAction(type.GET_USERS_FAIL, props<{ error: any }>());

export const searchUsers = createAction(type.SEARCH_USERS, props<{value: string}>());
export const SearchUsers_Fail = createAction(type.SEARCH_USERS_FAIL, props<{ error: any }>());
export const SearchUsers_Success = createAction(type.SEARCH_USERS_SUCCESS, props<{ users: Users }>());

export const getUser = createAction(type.GET_USER, props<{ id: number }>());
export const getUserSuccess = createAction(type.GET_USER_SUCCESS, props<{ user: User }>());
export const getUserFail = createAction(type.GET_USER_FAIL, props<{error: any}>())

export const postUser = createAction(type.POST_USER, props<{ body: UserData }>());
export const postUserSuccess = createAction(type.POST_USER_SUCCESS, props<{ user: User }>())
export const postUserFail = createAction(type.POST_USER_FAIL, props<{error:any}>())

export const updateUser = createAction(type.UPDATE_USER, props<{  body: UserData, id: number }>());
export const updateUserSuccess = createAction(type.UPDATE_USER_SUCCESS, props<{ user: User }>());
export const updateUserFail = createAction(type.UPDATE_USER_FAIL, props<{ error: any }>());

export const deleteUser = createAction(type.DELETE_USER, props<{ id: number }>());
export const deleteUserSuccess = createAction(type.DELETE_USER_SUCCESS, props<{ delete:Delete }>());
export const deleteUserFail = createAction(type.DELETE_USER_FAIL, props<{ error: any }>());
