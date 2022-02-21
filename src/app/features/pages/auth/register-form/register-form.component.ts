import { patternValidator, passwordMatchValidator } from 'src/app/shared/validators/CustomValidator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
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

  private confirmPasswordFormControl = new FormControl( '', [Validators.required, Validators.minLength(6)] );

  constructor(private formBuilder: FormBuilder) { 
  }

  registerForm = this.formBuilder.group({
    useremail: this.useremailFormControl,
    password: this.passwordFormControl,
    confirmPassword: this.confirmPasswordFormControl
  },
  { 
     
  });


  ngOnInit(): void {
  }

  submit() {
    console.log(this.registerForm.value)
  }

  get useremailControl():FormControl{
    return this.registerForm.get('useremail') as FormControl;
  }

  get passwordControl():FormControl{
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPasswordControl():FormControl{
    return this.registerForm.get('confirmPassword') as FormControl;
  }

}
