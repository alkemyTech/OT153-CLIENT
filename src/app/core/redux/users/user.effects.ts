import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { UserControllerService } from '@app/core/controllers/user-controller.service';
import * as action from '@app/core/redux/users/user.actions'

@Injectable()
export class UsersEffects {

  getAllUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.getUsers),
      mergeMap(() =>{
        return this.userService.getAllUsers().pipe(
          map(
            response => action.getUsersSuccess({users:response}),
            )
        )
      }
      ),
      catchError((error)=> of(action.getUsersFail({error:error})))
    );
  });

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.getUser),
      mergeMap((act) => {
        return this.userService.getUserById(act.id).pipe(
          map(
            response => action.getUserSuccess({user:response}),
          )
        )
      }),
      catchError((error )=> of(action.getUserFail({error:error})))

    )
  })

  postUser$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(action.postUser),
      mergeMap((act)=> {
        return this.userService.createUser(act.body).pipe(
          map(
            response => action.postUserSuccess({user:response})
          )
        )
      }),
      catchError((error)=> of(action.postUserFail({error:error})))
    )
  })

  updateUser$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(action.updateUser),
      mergeMap((act)=> {
        return this.userService.updateUserById(act.id,act.body).pipe(
          map(
            response => action.updateUserSuccess({user:response})
          )
        )
      }),
      catchError((error) => of(action.updateUserFail({error:error})))
    )
  })

  deleteUser$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(action.deleteUser),
      mergeMap((act)=>{
        return this.userService.deleteUserById(act.id).pipe(
          map(
            response => action.deleteUserSuccess({delete : response})
          )
        )
      }),
      catchError((error)=> of(action.deleteUserFail({error:error})))
    )
  })
  constructor(private actions$: Actions, private userService: UserControllerService) {}
}