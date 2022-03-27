import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  submitted: boolean = false;
  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    },
    { updateOn: 'change' }
  );

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.valid) {
  //post
    }
  }


}
