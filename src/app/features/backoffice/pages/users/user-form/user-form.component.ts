import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImgFile, User } from "@models/user.models";
import { UsersService } from "@core/services/users.service"


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
  imageFile!: ImgFile;
  imageError: boolean = false;
  image: string = "@assets/img/img_user.png";
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
          Validators.minLength(10)]],
      profile_image: ["", [Validators.required]],

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
      profile_image: this.image,
      role_id: this.form.get("role_id")?.value,
      description: this.form.get("description")?.value,
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
        this.form.patchValue({
          name: response.data.name,
          email: response.data.email,
          password: response.data.password,
          role_id: response.data.role_id,
          profile_image: this.image
        });
            
      });      
    }
  }

  fileEvent(event:any) {
    this.imageFile = { id: "0"}; 
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];   
      if ( (file.type != "image/jpeg") && (file.type != "image/png")   )    {
        this.imageError=true;      
        return false;
      }
     
      reader.readAsDataURL(file);
      reader.onload = () => {               
        this.image = "data:image/png;base64,"+reader.result!.toString().split(',')[1];         
        let img = new Image();             
        img.addEventListener('load',
      function(){
        let formElement = <HTMLFormElement>document.getElementById('imageError');     
       }    
      ,false);
  
      img.src = this.image;    
      this.imageFile.imgFile=reader.result!.toString().split(',')[1];            
      };
  
  
    }
    return true;
  }

}
