import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@app/features/services/users.service';
import { User } from "src/app/core/models/user.models";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {
  
  form: FormGroup;
  title = "Agregar Usuario";
  btn   = "Registrar Usuario";
  id: string|null;
  profile_image: string = "../../../../../assets/img/img_user.png";
  imgName: string = "";
  edit: boolean = false;
  ok: boolean = false;

  constructor(
    private _router      : ActivatedRoute,
    private _formBuld    : FormBuilder,
    private _userService : UsersService
  ) 

  {
    this.form = this._formBuld.group({
      name: [
        "", [
          Validators.required,
          Validators.minLength(4)
        ]],  
      email: [
        "",  [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{3,6}$/
          )
        ]],   
      password: ['', [
        Validators.required]],
      role_id: ['2', [
        Validators.required]],
        description: ['', [
          Validators.required,
          Validators.minLength(10)
        ]]
    });
    this.id = this._router.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.formEdit();
  }

  createUser(){
    const user : User = {
      name: this.form.get("name")?.value,
      email: this.form.get("email")?.value,
      password: this.form.get("password")?.value,
      profile_image: this.form.get("profile_image")?.value,
      role_id: this.form.get("role_id")?.value,
    };

    if (this.id) {
      this._userService.editUser(this.id, user).subscribe((response) => {
        alert("Usuario editado");
      });
    }else{
      this._userService.createUser(user).subscribe((response) => {
        alert("Usuario creado");
      });
    }

  }

  formEdit(){
    if(this.id !== null){
      this.edit = true;
      this.title = "Editar Usuario";
      this.btn = "Guardar Cambios";
      this.imgName = "";
      this._userService.getUser(this.id).subscribe((response)=>{
        console.log(response)
        this.form.patchValue({
          name: response.data.name,
          email: response.data.email,
          password: response.data.password,
          role_id: response.data.role_id
        });
        if(response.data.profile_image !== null){
          this.profile_image = response.data.profile_image;
        }        
      });      
    }
  }


}
