import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import {
  getOrganization,
  getOrganizationError,
  getOrganizationSuccess,
  postOrganization,
  postOrganizationError,
  postOrganizationSuccess,
} from '@core/redux/organization/organization.actions';
import { OrganizationControllerService } from '@app/core/controllers/organization-controller.service';

@Injectable()
export class OrganizationEffects {
  getOrganization$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getOrganization),
      tap(() => console.log('getOrganization')),
      mergeMap(() => {
        return this.organizationService.getPublicOrganization().pipe(
          map((response) => getOrganizationSuccess({ response: response.data })),
          catchError((error) => of(getOrganizationError({ error: error })))
        );
      })
    );
  });

  postOrganization$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postOrganization),
      mergeMap((state) => {
        return this.organizationService
          .postOrganization(state.body)
          .pipe(map((response) => postOrganizationSuccess({ response: response })));
      }),
      catchError((error) => of(postOrganizationError({ error: error })))
    );
  });

  constructor(private actions$: Actions, private organizationService: OrganizationControllerService) {}
}
