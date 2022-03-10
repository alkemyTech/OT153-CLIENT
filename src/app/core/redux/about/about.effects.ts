import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { PublicapiService } from '@core/services/publicApi.service';
import { getMembers, getMembersError, getMembersSuccess } from '@app/core/redux/about/about.actions';
import { MembersResponse } from '@app/core/models/members.interfaces';
import * as action from '@app/core/redux/about/about.actions'

@Injectable()
export class AboutEffects {

  getAllMembers$ = createEffect(() => 
     this.actions$.pipe(
      ofType(getMembers),
      switchMap((action) => 
        this.publicApiService.getPublicMembers()
        .pipe(
          map(({ data }) =>
            getMembersSuccess({success:[...data]})),
            catchError((error) => of(getMembersError({ error: 'test' })))
            ),
        )
      )
    );



  /* getAllMembers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMembers),
      mergeMap((action) => {
        return this.publicApiService.getPublicMembers().pipe(
          map((response) =>
            getMembersSuccess({
              success: response.data,
            })
          ),
          catchError((error) => of(getMembersError({ error: error })))
        );
      })
    );
  }); */ 


       /*    getAllUsers$ = createEffect(() => {
            return this.actions$.pipe(
              ofType(action.getMembers),
              mergeMap(() =>{
                return this.publicApiService.getPublicMembers().pipe(
                  map(
                    response => action.getMembersSuccess({success: response.data}),
                    )
                )
              }
              ),
              catchError((error)=> of(action.getMembersError({error:error})))
            );
          }); */
  

  constructor(private actions$: Actions, private publicApiService: PublicapiService) {}
}
