import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getControl as getControlFunction } from '@app/core/util/getControlForm';
import { emailValidator } from '@app/core/util/validators/form.validators';
import { select, Store } from '@ngrx/store';
import { AuthState } from '@app/core/redux/auth/auth.reducers';
import { Observable } from 'rxjs';
import { getAuth } from '@app/core/redux/auth/auth.selectors';
import { login } from '@app/core/redux/auth/auth.actions';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  authentication$: Observable<boolean>;

  getControl = getControlFunction;
  loginForm = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required]],
  });
  
  constructor(private fb: FormBuilder, private _store:Store<AuthState>,private _router:Router) {
    this.authentication$ = this._store.pipe(select(getAuth));
  }

  ngOnInit(): void {}

  onLogin(): void {
    const formValue = this.loginForm.value;
    localStorage.setItem('email', formValue.email);
    localStorage.setItem('password', formValue.password);
    const logAction = { email: this.loginForm.get('email')!.value, password: this.loginForm.get('password')!.value};
    this._store.dispatch(login(logAction));

    this.authentication$.subscribe( auth => {
      if(auth){
        this._router.navigate(["/"]);
      }
    });
  }
}
