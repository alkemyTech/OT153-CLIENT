import { ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator, digitValidator, allDigitValidator} from '@app/core/util/validators/form.validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private frmContact: FormGroup;
  private emailFormControl: FormControl = new FormControl( '', [ Validators.required, emailValidator() ]);
  private nameFormControl: FormControl = new FormControl ( '', [ Validators.required ]);
  private phoneFormControl: FormControl = new FormControl( '', [ Validators.required, Validators.minLength(8), allDigitValidator() ]);
  private messageFormControl: FormControl = new FormControl ( '', [ Validators.required ]);
  private error_required: string = 'El campo es obligatorio';

  constructor(private formBuilder: FormBuilder) { 
  }
  
  ngOnInit(): void {
    this.frmContact = this.registerForm();
  }

  registerForm(): FormGroup {
    return this.formBuilder.group(
      {
        name: this.nameFormControl,
        phone: this.phoneFormControl,
        email: this.emailFormControl,
        message: this.messageFormControl
     });
  }

  submit() {
    const email = this.frmContact.get('useremail')?.value;
  }

  errorRequired():string{
    return this.error_required;
  }

  controlForm(key: string): FormControl{
    return this.frmContact.controls[key] as FormControl;
  }

  get formSignup():FormGroup{
    return this.frmContact;
  }

  get nameControl():FormControl {
    return this.controlForm('name');
  }

  get phoneControl():FormControl {
    return this.controlForm('phone');
  }

  get emailControl():FormControl {
    return this.controlForm('email');
  }

  get messageControl():FormControl {
    return this.controlForm('message');
  }
 
}


