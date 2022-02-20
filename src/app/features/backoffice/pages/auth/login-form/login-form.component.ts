import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailFieldValidator } from 'src/app/shared/validators/email.validator';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, emailFieldValidator()]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    const formValue = this.loginForm.value;
  }

}
