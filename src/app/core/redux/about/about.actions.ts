import { Members, MembersResponse } from '@app/core/models/members.interfaces';
import { createAction, props } from '@ngrx/store';

export enum type {
  GET_ALL_MEMBERS = '[About page] get Members',
  GET_ALL_MEMBERS_ERROR = '[About page] get Members Error',
  GET_ALL_MEMBERS_SUCCESS = '[About page] get Members',
}

export const getMembers = createAction(type.GET_ALL_MEMBERS);
export const getMembersError = createAction(type.GET_ALL_MEMBERS_ERROR, props<{ error: any }>());
export const getMembersSuccess = createAction(
  type.GET_ALL_MEMBERS_SUCCESS,
  props<{ membersResponse: MembersResponse }>()
);
