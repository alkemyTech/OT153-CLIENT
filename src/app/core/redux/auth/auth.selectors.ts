import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducers";

export const getAuthState = createFeatureSelector<AuthState>('authReducer');


export const getAuth = createSelector(
    getAuthState,
    (state: AuthState) => state.auth
);  

export const getAuthOk = createSelector(
    getAuthState,
    (state: AuthState) => state
);  

export const cleanAuth = createSelector(
    getAuthState,
    () => ({
        auth: false,
        user: null,
        token: null        
    })
);

export const getAuthToken = createSelector(
    getAuthState,
    (state: AuthState) => state.token
);

export const getIsGoogleAuth = createSelector(
    getAuthState,
    (state: AuthState) => state.isGoogleAuth
);