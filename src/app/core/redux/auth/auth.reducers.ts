import { Action, createReducer, on } from '@ngrx/store';
import { User } from '@core/models/user.models';
import { login, logout, setAuthState } from './auth.actions';
import { GoogleUser } from '@app/core/models/google.interface';
 
export interface AuthState {
  auth: boolean;
  user: User | null;
  googleUser?: GoogleUser | Object | null | undefined,
  token: string | null;
}

export const initialState: AuthState = {
  auth: false,
  user: null,
  googleUser: null,
  token!: null
}
 
const _authReducer = createReducer(
  initialState,
  on(setAuthState, (state , setAuthState ) => ({
    ...state,
    auth: setAuthState.success,
    user: setAuthState.data,
    googleUser: setAuthState.googleUser,
    token: setAuthState.token
  })),
  
  on(logout, state => ({
    ...state, 
    auth: false, 
    user: null, 
    googleUser: null, 
    token: null   
  })),
);

export function authReducer(state: AuthState = initialState, action: Action){
  return _authReducer(state,action);
}
