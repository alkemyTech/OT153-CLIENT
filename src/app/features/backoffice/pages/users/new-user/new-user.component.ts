import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserData } from '@app/core/models/users.interfaces';
import { userState } from '@app/core/models/user-state.interface';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as userActions from '@app/core/redux/users/user.actions';
import * as userSelector from '@app/core/redux/users/user.selector';
import { UserActions } from '@app/core/redux/users/user.index';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  submitted: boolean = false;
  subscription: Subscription;
  user: UserData;
  user$: Observable<User>
  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    },
    { updateOn: 'change' }
  );
  constructor(private Store: Store<{ userState: userState }>) {}

  ngOnInit(): void {
   this.user$ = this.Store.select(userSelector.SelectStateData)
  }

  onSubmit(form: FormGroup) {
    // this.Store.dispatch(UserActions.postUser({body:body}))
    this.submitted = true;
    // this.subscription = this.privateApiService.post...
  }
}
