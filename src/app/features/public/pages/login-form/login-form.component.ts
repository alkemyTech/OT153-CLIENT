import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getControl as getControlFunction } from '@app/core/util/getControlForm';
import { emailValidator } from '@app/core/util/validators/form.validators';
import { select, Store } from '@ngrx/store';
import { AuthState } from '@app/core/redux/auth/auth.reducers';
import { Observable } from 'rxjs';
import { getAuth } from '@app/core/redux/auth/auth.selectors';
import { googlelogin, login } from '@app/core/redux/auth/auth.actions';
import { getAuthToken } from '@core/redux/auth/auth.selectors';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public authentication$: Observable<AuthState>;
  public loginForm: FormGroup;
  public standarAuth: boolean;
  
  constructor(fb: FormBuilder, public _store:Store<{state: AuthState}>, private _router:Router) { // 
    this.loginForm = fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required]],
    });
    this.authentication$ = this._store.select(getAuth);
    this.standarAuth = false
  }

  ngOnInit(): void {
  }

  onLogin(): boolean {
    if(this.loginForm.valid){
      const logAction = { email: this.loginForm.get('email')!.value, password: this.loginForm.get('password')!.value};
      this._store.dispatch(login(logAction));
  
      this.authentication$.subscribe( auth => {
        this.standarAuth = auth.auth
        if(auth.auth){
          this._router.navigate(["/backoffice"]);
        }
      });
    }
    return this.loginForm.valid;
  }
  

  loginGoogle(){
    this._store.dispatch(googlelogin());
    this._store.select(getAuthToken).subscribe( token => {
      if(!token) return
        this._router.navigateByUrl('/')
    })
  }
  
  getControl(controlName :string){
    return getControlFunction(this.loginForm, controlName);
  }
  
  controlInvalid(controlName :string){
    return this.getControl(controlName)?.invalid
  }

  controlTouched(controlName:string){
    return this.getControl(controlName)?.touched
  }


  
  
}
