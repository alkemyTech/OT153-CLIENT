import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ActivitiesControllerService } from '@app/core/controllers/activities-controller.service'; 
import { getAllActivities, responseGetAll, getOneActivities, responseError } from '@app/core/store/activities/activities.actions'; 

@Injectable()
export class ActivitiesEffects {

  getAllActivities$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(getAllActivities),
      mergeMap((action) => {  
        return this.activitiesService.getAll().pipe(
          map( response => responseGetAll( {response: response} ) )
        )
      })
    )
  });

  getOneActivities$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(getOneActivities),
      mergeMap((action) => {  
        return this.activitiesService.getOne(action.id).pipe(
          map( response => responseGetAll( {response: response} ) ),
          catchError( (error) => of(responseError({ response: error })))
        )
      })
    )
  });



  

  constructor( 
    private actions$: Actions, 
    private activitiesService: ActivitiesControllerService 
    ) { }

  



}