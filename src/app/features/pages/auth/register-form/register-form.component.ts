import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  value4!: string;
  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    username: [''],
    password: [''],
    confirmPassword: ['']
  });


  ngOnInit(): void {
  }

  submit():void {
    
  }

}
