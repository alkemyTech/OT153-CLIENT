import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "../../services/auth.service";
import { login, setAuthState } from '../actions/auth.actions';
import { catchError, exhaust, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { HTTPResp,User } from '@core/models/user.models';
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


}