import { Action, createReducer, on } from '@ngrx/store';
import * as AboutActions from './about.actions';

export interface State {
  id: number;
  name: string;
  logo: string;
  short_description: string;
  long_description: string;
  welcome_text: string;
  address: string;
  phone: string;
  ReactiveFormsModule;
  cellphone: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  group_id: null;
  facebook_url: string;
  linkedin_url: string;
  instagram_url: string;
  twitter_url: string;
}

export const initialState: State = {
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
};

export const aboutUsReducer = createReducer(
  initialState,
  on(AboutActions.getMembers, (state) => ({
    id: state.id,
    name: state.name,
    logo: state.logo,
    short_description: state.short_description,
    long_description: state.long_description,
    welcome_text: state.welcome_text,
    address: state.address,
    phone: state.phone,
    cellphone: state.cellphone,
    created_at: state.created_at,
    updated_at: state.updated_at,
    deleted_at: state.deleted_at,
    group_id: state.group_id,
    facebook_url: state.facebook_url,
    linkedin_url: state.linkedin_url,
    instagram_url: state.instagram_url,
    twitter_url: state.twitter_url,
  }))
);
