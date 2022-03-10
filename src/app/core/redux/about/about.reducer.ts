import { Action, createReducer, on } from '@ngrx/store';
import { AboutMembersState } from '@app/core/models/about-state.interface';
import { Members } from '@app/core/models/members.interfaces';
import * as AboutActions from './about.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { getMembersSuccess, getMembersError } from './about.actions';

const empty = [];
const errorEmpty = new HttpErrorResponse({});

const initialState: AboutMembersState = {
  success: empty,
  error: errorEmpty,
};

export const _aboutReducer = createReducer(
  initialState,
  on(getMembersSuccess, (state, action) => {
    return { ...state, success: action.success };
  }),
  on(getMembersError, (state, action) => {
    return { ...state, error: action.error };
  })
);

export function aboutReducer(state, action) {
  return _aboutReducer(state, action);
}
