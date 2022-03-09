import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "@core/services/auth.service";
import { login, register, setAuthState } from './auth.actions';
import { exhaustMap, map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router ){}
    
    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        exhaustMap( loginAction =>
            this.authService.auth({email:loginAction.email, password: loginAction.password}).pipe(
                map( (resp:any) => setAuthState({success: resp.success, token: resp.data.token, data: resp.data.user}))
            ))            
    ));

    register$ = createEffect(() => this.actions$.pipe(
        ofType(register),
        exhaustMap( registerAction =>
            this.authService.auth({name: registerAction.name,email:registerAction.email, password: registerAction.password}).pipe(
                map( (resp:any) => setAuthState({success: resp.success, token: resp.data.token, data: resp.data.user}))
            ))            
    ));


}