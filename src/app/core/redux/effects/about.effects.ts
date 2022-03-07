import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { PublicapiService } from '@core/services/publicApi.service';

@Injectable()
export class AboutUsEffects {
  loadMovies$ = createEffect(() =>
    this.loadMovies$.pipe(
      ofType('[About Page] Load Organization Error'),
      switchMap(
        () =>
          this.publicApiService.get('http://ongapi.alkemy.org/api/organization').pipe(
            map((organization) => {
              return organization;
            })
          ),
        catchError((error) => of(error))
      )
    )
  );

  constructor(private actions$: Actions, private publicApiService: PublicapiService) {}
}
