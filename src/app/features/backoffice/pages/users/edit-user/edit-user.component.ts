import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from '@app/core/controllers/user-controller.service';
import { DialogType } from '@app/core/enums/dialog.enum';
import { DialogService } from '@app/core/services/dialog.service';
import { UserData } from '@app/core/models/users.interfaces';
import { Observable, Subscription } from 'rxjs';
import { DialogData } from '@app/core/models/dialog.inteface';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  submitted: boolean = false;
  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    },
    { updateOn: 'change' }
  );
  user$: Observable<any>;
  username: string = '';
  email: string = '';
  userSubscribe: Subscription;
  dialog: DialogData | undefined;
  _id: number = 0;
  constructor(
    private router: Router,
    private userService: UserControllerService,
    private dialogService: DialogService, 

  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._id = parseFloat(this.router.url.split('/').pop() + '');
    this.userSubscribe = this.userService.getUserById(this._id).subscribe({
      next: (user) => {
        this.form.controls['email'].patchValue(user.data.email);
        this.form.controls['name'].patchValue(user.data.name);
        this.form.controls['password'].patchValue(user.data.password);
        console.log('next', user);
      },
      error: (error) => {
        error;
      },
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.valid) {
      let user: UserData = {name: '', email: ''};
      user.name = this.form.controls['name'].value
      user.email = this.form.controls['email'].value
      user.password = this.form.controls['password'].value
    this.userService.updateUserById(this._id, user).subscribe(success=> {
      this.dialog = { type: DialogType.SUCCESS, header: 'Enviado!', content: 'Usuario editado correctamente' };
            this.dialogService.show(this.dialog);
    },error => {
      this.dialog = { type: DialogType.ERROR, header: 'ERROR', content: `Hubo un error al editar el usuario...` };
          this.dialogService.show(this.dialog);
    })


}
  }

  ngOnDestroy(): void {
    this.userSubscribe.unsubscribe();
  }
}
