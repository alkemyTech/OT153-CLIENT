import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogType } from '@app/core/enums/dialog.enum';
import { ContactForm } from '@app/core/models/contact.interface';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogService } from '@app/core/services/dialog.service';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { emailValidator, digitValidator, allDigitValidator } from '@app/core/util/validators/form.validators';
import { environment } from '@env/environment';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  private frmContact: FormGroup;
  private emailFormControl: FormControl = new FormControl('', [Validators.required, emailValidator()]);
  private nameFormControl: FormControl = new FormControl('', [Validators.required]);
  private phoneFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    allDigitValidator(),
  ]);
  private messageFormControl: FormControl = new FormControl('', [Validators.required]);

  private contact: ContactForm = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private toastMessage: MessageService,
    private apiService: PublicapiService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.frmContact = this.registerForm();
  }

  registerForm(): FormGroup {
    return this.formBuilder.group({
      name: this.nameFormControl,
      phone: this.phoneFormControl,
      email: this.emailFormControl,
      message: this.messageFormControl,
    });
  }

  submit() {
    if (this.formContact.valid) {
      this.contact.name = this.nameControl.value;
      this.contact.phone = this.phoneControl.value;
      this.contact.email = this.emailControl.value;
      this.contact.message = this.messageControl.value;
      this.sendMessage();
    }
  }

  sendMessage() {
    this.apiService.postContact(environment.apiUrlContacts, this.contact).subscribe(
      (response) => {
        this.toast();
      },
      (error) => {
        let dialog: DialogData = {
          type: DialogType.ERROR,
          header: 'Error al procesar la operación',
          content: 'Hubo un error al enviar el mensaje de contacto.',
        };
        this.dialogService.show(dialog);
      }
    );
  }

  private toast() {
    this.toastMessage.add({ key: 'toastMessage', severity: 'success', summary: 'Enviado' });
  }

  controlForm(key: string): FormControl {
    return this.frmContact.controls[key] as FormControl;
  }

  get formContact(): FormGroup {
    return this.frmContact;
  }

  get nameControl(): FormControl {
    return this.controlForm('name');
  }

  get phoneControl(): FormControl {
    return this.controlForm('phone');
  }

  get emailControl(): FormControl {
    return this.controlForm('email');
  }

  get messageControl(): FormControl {
    return this.controlForm('message');
  }
}
