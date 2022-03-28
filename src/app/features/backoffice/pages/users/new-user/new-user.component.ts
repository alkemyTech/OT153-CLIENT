import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserData } from '@app/core/models/users.interfaces';
import { userState } from '@app/core/models/user-state.interface';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as userActions from '@app/core/redux/users/user.actions';
import * as userSelector from '@app/core/redux/users/user.selector';
import { UserActions } from '@app/core/redux/users/user.index';
import { UserControllerService } from '@app/core/controllers/user-controller.service';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  submitted: boolean = false;
  subscription: Subscription;
  user: UserData;
  user$: Observable<User>;
  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    },
    { updateOn: 'change' }
  );
  dialog: DialogData | undefined;

  constructor(private dialogService: DialogService, private userService: UserControllerService) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    this.submitted = true;

    if (form.valid) {
      let user: UserData = { name: '', email: '', password: '' };
      user.name = this.form.controls['name'].value;
      user.email = this.form.controls['email'].value;
      user.password = this.form.controls['password'].value;
      this.userService.createUser(user).subscribe((success) => {
        this.dialog = { type: DialogType.SUCCESS, header: 'Enviado!', content: 'Usuario creado con exito!' };
        this.dialogService.show(this.dialog);
      });
    }
  }
}
