import { createAction, props } from '@ngrx/store';
import { User } from '@app/core/models/user.models';
import { Users } from '@app/core/models/users.interfaces';
export enum type {
  GET_USERS = '[ User ] Get All Users',
  GET_USERS_FAIL = '[ User ] Get All Users Fail',
  GET_USERS_SUCCESS = '[ User ] Get All Users Success',

  GET_USER = '[ User ] Get A User',
  GET_USER_FAIL = '[ User ] Get A User Fail',
  GET_USER_SUCCESS = '[ User ] Get A User Success',

  POST_USER = '[ User ] Post A User',
  POST_USER_FAIL = '[ User ] Post A User Fail',
  POST_USER_SUCCESS = '[ User ] Post A User Success',

  UPDATE_USER = '[ User ] Update User',
  UPDATE_USER_FAIL = '[ User ] Update User Fail',
  UPDATE_USER_SUCCESS = '[ User ] Update User Succes',

  DELET_USER = '[ User ] Delete User',
  DELET_USER_FAIL = '[ User ] Delete User Fail',
  DELET_USER_SUCCESS = '[ User ] Delete User Success',
}

export const getUsers = createAction(type.GET_USERS);
export const getUsersSuccess = createAction(type.GET_USERS_SUCCESS, props<{ users: Users }>());
export const getUsersFail = createAction(type.GET_USERS_FAIL, props<{ users: Users }>());
export const getUser = createAction(type.GET_USER, props<{ id: number }>());
export const postUser = createAction(type.POST_USER, props<{ user: User }>());
export const updateUser = createAction(type.UPDATE_USER, props<{ user: User }>());
export const deleteUser = createAction(type.DELET_USER, props<{ id: number }>());
