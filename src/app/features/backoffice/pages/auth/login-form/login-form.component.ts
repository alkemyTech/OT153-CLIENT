import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { getControl as getControlFunction } from '@app/core/util/getControlForm';
import { emailValidator } from '@app/core/util/validators/form.validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  getControl = getControlFunction;
  loginForm = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onLogin(): void {
    const formValue = this.loginForm.value;
    localStorage.setItem('email', formValue.email);
    localStorage.setItem('password', formValue.password);
  }
}
