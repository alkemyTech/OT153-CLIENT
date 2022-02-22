import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { wordValidator, digitValidator, symbolValidator, emailValidator } from '@app/core/util/validators/form.validators';
import { passwordMatchValidator } from '@app/core/util/validators/password.validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  private frmSignup: FormGroup;
  private email: string; 
  private password: string;
  private useremailFormControl: FormControl = new FormControl( '', [ Validators.required, Validators.minLength(6), emailValidator() ]);
  private passwordFormControl: FormControl = new FormControl( '', [ Validators.required, Validators.minLength(6), digitValidator(), wordValidator(), symbolValidator() ]);
  private confirmPasswordFormControl = ([null, Validators.compose([Validators.required])]);

  constructor(private formBuilder: FormBuilder) { 
    this.frmSignup = this.registerForm();
  }
  
  ngOnInit(): void {
  }

  registerForm(): FormGroup {
    return this.formBuilder.group(
      {
        useremail: this.useremailFormControl,
        password: this.passwordFormControl,
        confirmPassword: this.confirmPasswordFormControl
     },
     {
        validator: passwordMatchValidator
     });
  }

  submit() {
    const email = this.frmSignup.value.useremail;
    const password = this.frmSignup.value.userpassword;
  }

  get formSignup():FormGroup{
    return this.frmSignup;
  }

  get useremailControl():FormControl{
    return this.frmSignup.controls['useremail'] as FormControl;
  }

  get passwordControl():FormControl{
    return this.frmSignup.controls['password'] as FormControl;
  }

  get confirmPasswordControl():FormControl{
    return this.frmSignup.controls['confirmPassword'] as FormControl;
  }

}
