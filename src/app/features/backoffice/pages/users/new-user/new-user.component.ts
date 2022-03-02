import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from '@app/core/models/users.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  submitted: boolean = false;
  subscription: Subscription;
  user: UserData;
  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    },
    { updateOn: 'change' }
  );
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    this.submitted = true;
    // this.subscription = this.privateApiService.post...
  }
}
