import { Action, createReducer, on } from '@ngrx/store';
import { OrganizationState } from '@app/core/models/organization-state.interface';
import { Organization } from '@app/core/models/organization.interfaces';
import * as OrganizationActions from './organization.actions';
import { HttpErrorResponse } from '@angular/common/http';
import {
  getOrganizationSuccess,
  getOrganizationError,
  postOrganizationSuccess,
  postOrganizationError,
} from './organization.actions';

const initialState: OrganizationState = {
  response: {
    success: false,
    data: {
      id: 0,
      name: '',
      logo: '',
      short_description: '',
      long_description: '',
      welcome_text: '',
      address: '',
      phone: '',
      cellphone: '',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
      group_id: null,
      facebook_url: '',
      linkedin_url: '',
      instagram_url: '',
      twitter_url: '',
    },
    message: '',
  },

  error: new HttpErrorResponse({}),
};

export const _organizationReducer = createReducer(
  initialState,
  on(getOrganizationSuccess, (state, action) => {
    return { ...state, response: action.response };
  }),
  on(getOrganizationError, (state, action) => {
    return { ...state, error: action.error };
  }),
  on(postOrganizationSuccess, (state, action) => {
    return { ...state, response: action.response };
  }),
  on(postOrganizationError, (state, action) => {
    return { ...state, error: action.error };
  })
);

export function organizationReducer(state, action) {
  return _organizationReducer(state, action);
}
