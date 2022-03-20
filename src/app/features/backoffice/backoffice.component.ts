import { Component, OnInit } from '@angular/core';
import { AuthState } from '@app/core/redux/auth/auth.reducers';
import { select, Store } from '@ngrx/store';
import { getAuth } from '@app/core/redux/auth/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'alk-backoffice',
  templateUrl: './backoffice.component.html',
})
export class BackofficeComponent implements OnInit {

  //TODO erase then
  authentication$: Observable<boolean>;
  //TODO erase end

  constructor(private _store:Store<AuthState>,) { 

    //TODO erase then
    this.authentication$ = this._store.pipe(select(getAuth));  
    this.authentication$.subscribe({
      next: (resp) => { console.table({'Auth:': resp});
       }
    })
    //TODO erase end
    
  }
  

  ngOnInit(): void {  
  }

}
