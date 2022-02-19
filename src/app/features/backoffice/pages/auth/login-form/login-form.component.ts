import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    const formValue = this.loginForm.value;
  }
}
