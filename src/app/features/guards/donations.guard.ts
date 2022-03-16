import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../core/redux/auth/auth.reducers';
import { getAuthOk } from '../../core/redux/auth/auth.selectors';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationGuard implements CanActivate {

  constructor( private store: Store<AuthState>, private router: Router ){}

  canActivate(): Observable<boolean> | boolean {
    
    return this.store.select(getAuthOk).pipe(
      map(
        ({auth, isGoogleAuth}) => {
          if(!isGoogleAuth && !auth){
            this.router.navigateByUrl('/')
            return false
          }else{
            return true
          }          
        }
      )
    )
    
  }
  
}
