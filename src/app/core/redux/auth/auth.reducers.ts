import { Action, createReducer, on } from '@ngrx/store';
import { User } from '@core/models/user.models';
import { login, logout, setAuthState } from './auth.actions';
import { GoogleUser } from '@app/core/models/google.interfaces';
 
export interface AuthState {
  auth: boolean;
  isAdmin: boolean,
  user: User | null;
  googleUser?: GoogleUser | Object | null | undefined,
  token: string | null,
  isGoogleAuth: boolean | undefined
}

export const initialState: AuthState = {
  auth: false,
  isAdmin: false,
  user: null,
  googleUser: null,
  token!: null,
  isGoogleAuth: false
}
 
const _authReducer = createReducer(
  initialState,
  on(setAuthState, (state , setAuthState ) => ({
    ...state,
    auth: setAuthState.success,
    isAdmin: setAuthState.isAdmin,
    user: setAuthState.data,
    googleUser: setAuthState.googleUser,
    isGoogleAuth: setAuthState.isGoogleAuth,
    token: setAuthState.token
  })),
  
  on(logout, state => ({
    ...state, 
    auth: false, 
    user: null, 
    googleUser: null, 
    isGoogleAuth: false,
    token: null   
  })),
);

export function authReducer(state: AuthState = initialState, action: Action){
  return _authReducer(state,action);
}
