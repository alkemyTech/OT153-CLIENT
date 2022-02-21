import { patternValidator, passwordMatchValidator } from './CustomValidator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public frmSignup: FormGroup;
  
  private patternEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //
  private patternSymbols: RegExp = /[-!$%@^&*()_+|~=`{}\[\]:";'<>?,.\/]/; //

  private useremailFormControl = new FormControl( '', [
      Validators.required, Validators.minLength(6),
      patternValidator(this.patternEmail, { hasEmail: true })
    ] );

  private passwordFormControl = new FormControl( '', [
      Validators.required, Validators.minLength(6),
      patternValidator(/\d/, { hasNumber: true }),
      patternValidator(/\w/, { hasLetter: true }),
      patternValidator(this.patternSymbols, { hasSymbol: true })
    ] );

  private confirmPasswordFormControl = ([null, Validators.compose([Validators.required])]);

  constructor(private formBuilder: FormBuilder) { 
    this.frmSignup = this.registerForm();
  }

  registerForm(): FormGroup {
    return this.formBuilder.group(
      {
        useremail: this.useremailFormControl,
        password: this.passwordFormControl,
        confirmPassword: this.confirmPasswordFormControl
     },
     {
        // check whether our password and confirm password match
        validator: passwordMatchValidator
     });
  }


  ngOnInit(): void {
  }

  submit() {
    console.log(this.registerForm().value)
  }

  get formBuild():FormBuilder{
    return this.formBuilder as FormBuilder;
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
