import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as categoriesActions from './categories.actions';
import { of } from "rxjs";
import { HttpService } from '../../services/http.service';
import { environment } from '@env/environment.local';
import { respFullCategories } from '../../models/category.interface';

@Injectable()
export class CategoriesEffects{

  private url = environment.apiUrlCategories;

  constructor( 
    private actions$: Actions, 
    private httpService: HttpService
  ){}

  listCategories$ = createEffect(
    () => this.actions$.pipe(
      ofType( categoriesActions.listCategories ),
      mergeMap(
        () => this.httpService.get<respFullCategories>(this.url).pipe(
          map( resp => resp.data ),
          map(categories => categoriesActions.listCategoriesSuccess( {categories} )),
          catchError(err => of(categoriesActions.listCategoriesError({payload: err}) ) )
        )
      )
    )
  );

}
