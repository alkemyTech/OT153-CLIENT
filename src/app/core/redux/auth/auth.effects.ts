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
        exhaustMap(({email,password}) =>
            this.authService.auth({email,password}).pipe(        
                tap(console.log),
                map( ({success,data:{token,user}}) => setAuthState({ 
                    auth: true, success,token,data:user,googleUser:false, isAdmin: (user.role_id === 1 ? true : false),
                }))
            ))            
    ));

    register$ = createEffect(() => this.actions$.pipe(
        ofType(register),
        exhaustMap( registerAction =>
            this.authService.register({name: registerAction.name,email:registerAction.email, password: registerAction.password}).pipe(
                map( (resp:any) => setAuthState({ auth: true, success: resp.success, token: resp.data.token, data: resp.data.user, googleUser: false, isAdmin: false}))
            ))            
    ));

    googleLogin$ = createEffect(
        () => this.actions$.pipe(
        ofType( googlelogin ),
            mergeMap(
                () => this.authService.googleLogin().pipe(
                    map( (googleData) => setAuthState({ 
                        auth: false, googleUser: googleData.additionalUserInfo?.profile, success: true, data: null, token: googleData.credential?.['accessToken'], isGoogleAuth: true, isAdmin: false 
                    }))
                )
            )
        )
    );

}
