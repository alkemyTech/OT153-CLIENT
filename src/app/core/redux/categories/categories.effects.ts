import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as categoriesActions from './categories.actions';
import { of } from "rxjs";
import { HttpService } from '@core/services/http.service';
import { environment } from '@env/environment';
import { respFullCategories } from '@models/category.interface';
import { getMemberByNameFail, getMemberByNameSuccess } from "../members/member.actions";
import { CategoriesService } from '../../controllers/categories-controller.service';

@Injectable()
export class CategoriesEffects{

  private url = environment.apiUrlCategories;

  constructor( 
    private actions$: Actions, 
    private httpService: HttpService,
    private categoriesService:CategoriesService
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

  getCategoryByName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(categoriesActions.getCategoryByName),
      mergeMap((act) => {
        return this.categoriesService.getCategoryById(act.name).pipe(
          map(
            response => categoriesActions.getCategoryByNameSuccess({response}),
          )
        )
      }),
      catchError((error )=> of(getMemberByNameFail({error: error})))

    )
  })

}
