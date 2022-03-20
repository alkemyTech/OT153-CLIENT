import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthState } from '@app/core/redux/auth/auth.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getAuthOk } from '@core/redux/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor( private store: Store<AuthState>, private router: Router ){}

  canActivate(): Observable<boolean> | boolean {
    return this.store.select(getAuthOk).pipe(
      map(
        ({auth, isGoogleAuth}) => {
          if(auth) {
            this.router.navigateByUrl('/backoffice');
            return false
          }else{
            if(isGoogleAuth){
                this.router.navigateByUrl('/backoffice');
              return false
            }else{
              return true
            }
          }
        }
      )
    )
  }
  
}
