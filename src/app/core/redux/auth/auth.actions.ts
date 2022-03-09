import { createAction, props } from '@ngrx/store';
import { User } from '@core/models/user.models';

interface AuthResponse {
    success: boolean,
    data: User,
    token: string
}

export const login        = createAction('[Authentication] Login', props<{ email: string; password: string }>() );
export const logout       = createAction('[Authentication] Logout');
export const register     = createAction('[Authentication] Register', props<{name: string, email: string, password: string}>() );
export const setAuthState = createAction('[Authentication] Auth State Modified', props<AuthResponse>() );
