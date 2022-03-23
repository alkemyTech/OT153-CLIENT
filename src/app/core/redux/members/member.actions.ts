import { createAction, props } from '@ngrx/store';
import { MembersResponse, MemberResponse, Member} from '@app/core/models/members.interfaces';
import { Delete } from '@app/core/models/delete.interface';

export enum type {
  GET_MEMBERS = '[ Member ] Get All Members',
  GET_MEMBERS_FAIL = '[ Member ] Get All Members Fail',
  GET_MEMBERS_SUCCESS = '[ Member ] Get All Members Success',

  GET_MEMBER = '[ Member ] Get A Member',
  GET_MEMBER_FAIL = '[ Member ] Get A Member Fail',
  GET_MEMBER_SUCCESS = '[ Member ] Get A Member Success',

  GET_MEMBER_BY_NAME = '[ Member ] Get A Member By Name',
  GET_MEMBER_BY_NAME_FAIL = '[ Member ] Get A Member By Name Fail',
  GET_MEMBER_BY_NAME_SUCCESS = '[ Member ] Get A Member By Name Success',

  POST_MEMBER = '[ Member ] Post A Member',
  POST_MEMBER_FAIL = '[ Member ] Post A Member Fail',
  POST_MEMBER_SUCCESS = '[ Member ] Post A Member Success',

  UPDATE_MEMBER = '[ Member ] Update Member',
  UPDATE_MEMBER_FAIL = '[ Member ] Update Member Fail',
  UPDATE_MEMBER_SUCCESS = '[ Member ] Update Member Succes',

  DELETE_MEMBER = '[ Member ] Delete Member',
  DELETE_MEMBER_FAIL = '[ Member ] Delete Member Fail',
  DELETE_MEMBER_SUCCESS = '[ Member ] Delete Member Success',
}

export const getMembers = createAction(type.GET_MEMBERS);
export const getMembersSuccess = createAction(type.GET_MEMBERS_SUCCESS, props<{ members: MembersResponse }>());
export const getMembersFail = createAction(type.GET_MEMBERS_FAIL, props<{ error: any }>());

export const getMember = createAction(type.GET_MEMBER, props<{ id: number }>());
export const getMemberSuccess = createAction(type.GET_MEMBER_SUCCESS, props<{ member: MemberResponse }>());
export const getMemberFail = createAction(type.GET_MEMBER_FAIL, props<{error: any}>())

export const getMemberByName = createAction(type.GET_MEMBER_BY_NAME, props<{ name: string }>());
export const getMemberByNameSuccess = createAction(type.GET_MEMBER_BY_NAME_SUCCESS, props<{ response: MembersResponse }>());
export const getMemberByNameFail = createAction(type.GET_MEMBER_BY_NAME_FAIL, props<{error: any}>())

export const postMember = createAction(type.POST_MEMBER, props<{ body: Member }>());
export const postMemberSuccess = createAction(type.POST_MEMBER_SUCCESS, props<{ member: MemberResponse }>())
export const postMemberFail = createAction(type.POST_MEMBER_FAIL, props<{error:any}>())

export const updateMember = createAction(type.UPDATE_MEMBER, props<{  body: Member, id: number }>());
export const updateMemberSuccess = createAction(type.UPDATE_MEMBER_SUCCESS, props<{ member: MemberResponse }>());
export const updateMemberFail = createAction(type.UPDATE_MEMBER_FAIL, props<{ error: any }>());

export const deleteMember = createAction(type.DELETE_MEMBER, props<{ id: number }>());
export const deleteMemberSuccess = createAction(type.DELETE_MEMBER_SUCCESS, props<{ delete: Delete }>());
export const deleteMemberFail = createAction(type.DELETE_MEMBER_FAIL, props<{ error: any }>());
