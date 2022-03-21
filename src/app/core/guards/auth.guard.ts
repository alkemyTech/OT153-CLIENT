import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthState } from '@app/core/redux/auth/auth.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { getAuthOk } from '@core/redux/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private store: Store<AuthState>, private router: Router ){}

  canActivate(): Observable<boolean> | boolean {
    return this.store.select(getAuthOk).pipe(
      map(
        ({auth, isGoogleAuth, user}) => {
          if(auth && !isGoogleAuth){
            if(user?.role_id == 1){
              return true;
            }
            this.router.navigateByUrl('/home');  
            return false;       
          }
          this.router.navigateByUrl('/iniciar-sesion');
          return false;
          
        }
      )
      
    )
  }
  
}

