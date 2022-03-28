import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from '@app/core/controllers/user-controller.service';
import { userState } from '@app/core/models/user-state.interface';
import { User } from '@app/core/models/user.models';
import * as userActions from '@app/core/redux/users/user.actions';
import * as userSelector from '@app/core/redux/users/user.selector';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  submitted: boolean = false;
  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    },
    { updateOn: 'change' }
  );
  user$: Observable<any>;
  username: string = '';
  email: string = '';
  userSubscribe: Subscription;
  _id: number | undefined = 0;
  constructor(
    private router: Router,
    private userService: UserControllerService,
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._id = parseFloat(this.router.url.split('/').pop() + '');
    this.userService.getUserById(this._id).subscribe({
      next: (user) => {
        this.form.controls['email'].patchValue(user.data.email);
        this.form.controls['name'].patchValue(user.data.name);
        console.log('next', user);
      },
      error: (error) => {
        error;
      },
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.valid) {

  //post

}
  }

  ngOnDestroy(): void {
    this.userSubscribe.unsubscribe();
  }
}
