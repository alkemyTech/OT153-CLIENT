import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "@core/services/auth.service";
import { login, register, setAuthState, googlelogin, logout } from './auth.actions';
import { tap, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class AuthEffects {
    constructor(
        private actions$: Actions, 
        private authService: AuthService, 
        private router: Router 
    ){}
    
    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        exhaustMap( ({email,password}) =>
            this.authService.auth({email,password}).pipe(
                map( ({success,data:{token,user}}) => setAuthState({success,token,data:user,googleUser:null}))
            ))            
    ));

    register$ = createEffect(() => this.actions$.pipe(
        ofType(register),
        exhaustMap( registerAction =>
            this.authService.auth({name: registerAction.name,email:registerAction.email, password: registerAction.password}).pipe(
                map( (resp:any) => setAuthState({success: resp.success, token: resp.data.token, data: resp.data.user, googleUser: null}))
            ))            
    ));

    googleLogin$ = createEffect(
        () => this.actions$.pipe(
        ofType( googlelogin ),
            mergeMap(
                () => this.authService.googleLogin().pipe(
                    map( (googleData) => setAuthState({ googleUser: googleData.additionalUserInfo?.profile, success: true, data: null, token: googleData.credential?.['accessToken'] } ) )
                )
            )
        )
    );

}
