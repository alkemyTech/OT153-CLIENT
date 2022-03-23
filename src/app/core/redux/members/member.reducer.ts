import { HttpErrorResponse } from '@angular/common/http';
import { Delete } from '@app/core/models/delete.interface';
import { createReducer, on } from '@ngrx/store';
import * as action from '@app/core/redux/members/member.actions';
import { Member, MemberResponse, MembersResponse } from '@app/core/models/members.interfaces';
import { memberState } from '@app/core/models/member-state.interface';


const memberEmpty: Member = { name: '' };
const membersEmpty: Member[] = [{ name: '' }];
const memberResponseEmpty: MemberResponse = { success: false, data: memberEmpty, message: '' };
const membersResponseEmpty: MembersResponse = { success: false, data: membersEmpty, message: '' };
const deleteEmpty: Delete = { success: false, data: '', message: '' };
const errorEmpty = new HttpErrorResponse({});

const initialState: memberState = {
  responseAll: membersResponseEmpty,
  response: memberResponseEmpty,
  error: errorEmpty,
  delete: deleteEmpty,
};

export const _memberReducer = createReducer(
  initialState,
  on(action.getMembersSuccess, (state, action) => {return {...state, responseAll: action.members}}),
  on(action.getMembersFail, (state,action)=> {return {...state,error: action.error}}),

  on(action.getMemberSuccess, (state,action) => {return {...state, response: action.member}}),
  on(action.getMemberFail, (state,action) => {return {...state, error: action.error}}),

  on(action.getMemberByNameSuccess, (state , {response} ) => (
    {
    ...state,
    responseAll: response
    }
  )),

  on(action.getMemberFail, (state,action) => {return {...state, error: action.error}}),

  on(action.updateMemberSuccess,(state,action) => {return {...state,response: action.member}}),
  on(action.updateMemberFail, (state,action) => {return {...state,error: action.error}}),

  on(action.deleteMemberSuccess,(state,action) => {return {...state,delete: action.delete}}),
  on(action.deleteMemberFail,(state,action) => {return {...state,error: action.error}})

);

export function memberReducer(state,action){
  return _memberReducer(state,action);
}