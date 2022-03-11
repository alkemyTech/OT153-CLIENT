import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as action from '@app/core/redux/members/member.actions'
import { MemberService } from '@app/core/controllers/member-controller.service';

@Injectable()
export class MemberEffects {

  getAllMembers$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(action.getMembers),
      mergeMap(() =>{
        return this.memberService.getAllMembers().pipe(
          map(
            response => action.getMembersSuccess({members: response}),
            ),
          catchError( (error) => of( action.getMembersFail({error: error}) ) )
        )
      }
    )
  )});

  getMember$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.getMember),
      mergeMap((act) => {
        return this.memberService.getMemberById(act.id).pipe(
          map(
            response => action.getMemberSuccess({member: response}),
          )
        )
      }),
      catchError((error )=> of(action.getMemberFail({error: error})))

    )
  })

  postMember$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(action.postMember),
      mergeMap((act)=> {
        return this.memberService.createMember(act.body).pipe(
          map(
            response => action.postMemberSuccess({member: response})
          )
        )
      }),
      catchError((error)=> of(action.postMemberFail({error: error})))
    )
  })

  updateUser$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(action.updateMember),
      mergeMap((act)=> {
        return this.memberService.updateMemberById(act.id, act.body).pipe(
          map(
            response => action.updateMemberSuccess({member: response})
          )
        )
      }),
      catchError((error) => of(action.updateMemberFail({error: error})))
    )
  })

  deleteUser$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(action.deleteMember),
      mergeMap((act)=>{
        return this.memberService.deleteMemberById(act.id).pipe(
          map(
            response => action.deleteMemberSuccess({delete: response})
          )
        )
      }),
      catchError((error)=> of(action.deleteMemberFail({error: error})))
    )
  })
  constructor(private actions$: Actions, private memberService: MemberService) {}
}