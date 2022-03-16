import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthState } from '@app/core/redux/auth/auth.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getAuthOk } from '../../core/redux/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private store: Store<AuthState>, private router: Router ){}

  canActivate(): Observable<boolean> | boolean {
    
    return this.store.select(getAuthOk).pipe(
      map(
        ({auth}) => {
          if(!auth) {
            this.router.navigateByUrl('/login');
            return false
          }else{
            return true
          }
        }
      )
    )
    
  }
  
}
