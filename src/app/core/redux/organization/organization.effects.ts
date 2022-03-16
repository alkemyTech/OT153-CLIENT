import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PublicapiService } from '@core/services/publicApi.service';
import * as action from '@app/core/redux/organization/organization.actions';
import { PrivateApiService } from '@app/core/services/privateApi.service';

@Injectable()
export class OrganizationEffects {
  getOrganization$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.getOrganization),
      mergeMap(() => {
        return this.publicApiService
          .getPublicOrganization()
          .pipe(map((response) => action.getOrganizationSuccess({ response: response.data })));
      }),
      catchError((error) => of(action.getOrganizationError({ error: error })))
    );
  });

  postOrganization$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.postOrganization),
      mergeMap((state) => {
        return this.privateApiService
          .postOrganization(state.body)
          .pipe(map((response) => action.postOrganizationSuccess({ response: response })));
      }),
      catchError((error) => of(action.postOrganizationError({ error: error })))
    );
  });

  constructor(
    private actions$: Actions,
    private publicApiService: PublicapiService,
    private privateApiService: PrivateApiService
  ) {}
}
