import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  wordValidator,
  digitValidator,
  symbolValidator,
  emailValidator,
} from '@app/core/util/validators/form.validators';
import { passwordMatchValidator } from '@app/core/util/validators/password.validators';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  private frmSignup: FormGroup;
  private useremailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    emailValidator(),
  ]);
  private passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    digitValidator(),
    wordValidator(),
    symbolValidator(),
  ]);
  private confirmPasswordFormControl = [null, Validators.compose([Validators.required])];
  termsAccepted = false;
  termsFilePath = '/assets/backoffice/terminos-y-condiciones.pdf'

  constructor(private formBuilder: FormBuilder, private dialogService: DialogService) {
    this.frmSignup = this.registerForm();
  }

  ngOnInit(): void {}

  registerForm(): FormGroup {
    return this.formBuilder.group(
      {
        useremail: this.useremailFormControl,
        password: this.passwordFormControl,
        confirmPassword: this.confirmPasswordFormControl,
      },
      {
        validator: passwordMatchValidator,
      }
    );
  }

  submit() {
    if(this.termsAccepted == false){
      this.getTermsAcceptance();
    }
    if(this.termsAccepted){
      const email = this.frmSignup.get('useremail')?.value;
      const password = this.frmSignup.get('password')?.value;
    }
  }

  getTermsAcceptance(){
    let dialog: DialogData = { 
      type: DialogType.SUCCESS, 
      header: 'Términos y condiciones', 
      content:'Hola', 
      filePDF: this.termsFilePath 
    };
    this.dialogService.show(dialog);
    this.dialogService.DialogSelectionObservable.subscribe(acceptance => this.termsAccepted = acceptance)
  }

  get formSignup(): FormGroup {
    return this.frmSignup;
  }

  get useremailControl(): FormControl {
    return this.frmSignup.controls['useremail'] as FormControl;
  }

  get passwordControl(): FormControl {
    return this.frmSignup.controls['password'] as FormControl;
  }

  get confirmPasswordControl(): FormControl {
    return this.frmSignup.controls['confirmPassword'] as FormControl;
  }
}
