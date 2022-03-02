import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [DialogService],
})
export class EditUserComponent implements OnInit {
  submitted: boolean = false;
  form: FormGroup = new FormGroup(
    {
      name: new FormControl(this.config.data.name, Validators.required),
      email: new FormControl(this.config.data.email, Validators.required),
    },
    { updateOn: 'change' }
  );

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.valid) {
      // this.subscription = this.privateApiService.patch...
      this.ref.close('user edited'); // or pass any response needed to users.component
    }
  }

  hideDialog() {
    this.ref.close('cancel');
  }
}
