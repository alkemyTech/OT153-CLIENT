import { createAction, props } from '@ngrx/store';
import { User } from '@core/models/user.models';
import { GoogleUser } from '@app/core/models/google.interfaces';


interface AuthResponse {
    success: boolean,
    data: User | null,
    googleUser: GoogleUser | Object | null | undefined,
    token: string,
    isGoogleAuth?: boolean
}

export const login        = createAction('[Authentication] Login', props<{ email: string; password: string }>() );
export const googlelogin  = createAction('[Authentication] Google Login');
export const isGoogleAuth  = createAction('[Authentication] Google Is Google');
export const logout       = createAction('[Authentication] Logout');
export const register     = createAction('[Authentication] Register', props<{name: string, email: string, password: string}>() );
export const setAuthState = createAction('[Authentication] Auth State Modified', props<AuthResponse>() );
