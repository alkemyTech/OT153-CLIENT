import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PublicapiService } from '@core/services/publicApi.service';
import { getMembers, getMembersError, getMembersSuccess } from '@app/core/redux/about/about.actions';

@Injectable()
export class AboutEffects {
  getAllMembers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMembers),
      mergeMap((action) => {
        return this.publicApiService.getPublicMembers().pipe(
          map((response) =>
            getMembersSuccess({
              membersResponse: response,
            })
          ),
          catchError((error) => of(getMembersError({ error: error })))
        );
      })
    );
  });

  constructor(private actions$: Actions, private publicApiService: PublicapiService) {}
}
