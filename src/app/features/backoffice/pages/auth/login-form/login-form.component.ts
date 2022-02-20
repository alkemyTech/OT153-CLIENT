import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailFieldValidator } from 'src/app/shared/validators/email.validator';
import { passwordStrengthValidator } from 'src/app/shared/validators/password.validator';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, emailFieldValidator()]],
    password: ['', [Validators.required, Validators.minLength(6), passwordStrengthValidator()]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    const formValue = this.loginForm.value;
    localStorage.setItem('email', formValue.email);
    localStorage.setItem('password', formValue.password);
  }

}
