import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ActivitiesControllerService } from '@app/core/controllers/activities-controller.service'; 
import { 
  getAllActivities, GetAllActivities_Success, GetAllActivities_Fail, 
  getOneActivities, GetOneActivity_Success, GetOneActivity_Fail,
  insertActivities, InsertActivities_Success, InsertActivities_Fail,
  updateActivities, UpdateActivities_Success, UpdateActivities_Fail,
  deleteActivities, DeleteActivity_Success, DeleteActivity_Fail
} from '@app/core/store/activities/activities.actions'; 

@Injectable()
export class ActivitiesEffects {

  getAllActivities$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(getAllActivities),
      mergeMap((action) => {  
        return this.activitiesService.getAll().pipe(
          map( response => GetAllActivities_Success( {activities:response.data})),
          catchError( (error) => of( GetAllActivities_Fail ({ error: error })))

        )
      })
    )
  });

  getOneActivities$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(getOneActivities),
      mergeMap((action) => {  
        return this.activitiesService.getOne(action.id).pipe(
          map( response => GetOneActivity_Success( {activity: response.data} ) ),
          catchError( (error) => of( GetOneActivity_Fail ({ error: error })))
        )
      })
    )
  });

  insertActivity$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(insertActivities),
      mergeMap((action) => {  
        return this.activitiesService.insertActivity(action.body).pipe(
          map( response => InsertActivities_Success( {activity: response.data} ) ),
          catchError( (error) => of( InsertActivities_Fail ({ error: error })))
        )
      })
    )
  });

  updateActivity$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(updateActivities),
      mergeMap((action) => {  
        return this.activitiesService.updateActivity(action.id, action.body).pipe(
          map( response => UpdateActivities_Success( {activity: response.data} ) ),
          catchError( (error) => of( UpdateActivities_Fail ({ error: error })))
        )
      })
    )
  });

  deleteActivity$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(deleteActivities),
      mergeMap((action) => {  
        return this.activitiesService.delete(action.id).pipe(
          map( response => DeleteActivity_Success( {delete: response} ) ),
          catchError( (error) => of( DeleteActivity_Fail ({ error: error })))
        )
      })
    )
  });

  
  constructor( 
    private actions$: Actions, 
    private activitiesService: ActivitiesControllerService 
  ) {}
}