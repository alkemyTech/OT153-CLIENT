import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { PublicapiService } from '@core/services/publicApi.service';
import { getMembers, getMembersError, getMembersSuccess } from '@app/core/redux/about/about.actions';
import { MembersResponse } from '@app/core/models/members.interfaces';

@Injectable()
export class AboutEffects {
  getAllMembers$ = createEffect(() => 
     this.actions$.pipe(
      ofType(getMembers),
      switchMap(() => 
        this.publicApiService.getPublicMembers().pipe(
          map((membersResponse) =>
            getMembersSuccess({membersResponse})),
            catchError((error) => of(getMembersError({ error: error })))
            ),
        )
      )
    );
  

  constructor(private actions$: Actions, private publicApiService: PublicapiService) {}
}
