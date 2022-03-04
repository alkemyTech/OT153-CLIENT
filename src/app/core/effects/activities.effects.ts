import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ActivitiesControllerService } from './../controllers/activities-controller.service'; 
import { getAllActivities, responseActivities } from '@app/shared/store/activities.actions'; 

@Injectable()
export class ActivitiesEffects {

  getallactivities$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(getAllActivities),
      mergeMap((action) => {  
        return this.activitiesService.getAll().pipe(
          map( response => responseActivities( {response: response} ) )
        )
      })
    )
  });

  

  constructor( 
    private actions$: Actions, 
    private activitiesService: ActivitiesControllerService 
    ) { }

  



}