import { Organization, OrganizationData } from '@app/core/models/organization.interfaces';
import { createAction, props } from '@ngrx/store';

export enum type {
  GET_ORGANIZATION = '[Organization data] get Organization',
  GET_ORGANIZATION_ERROR = '[Organization data] get Organization Error',
  GET_ORGANIZATION_SUCCESS = '[Organization data] get Organization Success',

  POST_ORGANIZATION = '[Organization data] Post Organization',
  POST_ORGANIZATION_ERROR = '[Organization data] Post Organization Error',
  POST_ORGANIZATION_SUCCESS = '[Organization data] Post Organization Success',
}

export const getOrganization = createAction(type.GET_ORGANIZATION);
export const getOrganizationError = createAction(type.GET_ORGANIZATION_ERROR, props<{ error: any }>());
export const getOrganizationSuccess = createAction(type.GET_ORGANIZATION_SUCCESS, props<{ response: Organization }>());

export const postOrganization = createAction(type.POST_ORGANIZATION, props<{ body: OrganizationData }>());
export const postOrganizationSuccess = createAction(
  type.POST_ORGANIZATION_SUCCESS,
  props<{ response: Organization }>()
);
export const postOrganizationError = createAction(type.POST_ORGANIZATION_ERROR, props<{ error: any }>());
