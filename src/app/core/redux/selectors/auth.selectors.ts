import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/auth.reducers";

export const getAuthState = createFeatureSelector<AuthState>('authReducer');


export const getAuth = createSelector(
    getAuthState,
    (state: AuthState) => state.auth
);  

export const getAuthOk = createSelector(
    getAuthState,
    (state: AuthState) => state
);  