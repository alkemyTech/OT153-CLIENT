import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { register } from '@app/core/redux/auth/auth.actions';
import {
  wordValidator,
  digitValidator,
  symbolValidator,
  emailValidator,
} from '@app/core/util/validators/form.validators';
import { passwordMatchValidator } from '@app/core/util/validators/password.validators';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';
import { Store } from '@ngrx/store';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { timer } from 'rxjs';
import { } from '@angular/google-maps';
declare const google: any;

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  isLoading: boolean = true;
  private frmSignup: FormGroup;
  private usernameFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  private useremailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    emailValidator(),
  ]);
  private userdirectionFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  private passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    digitValidator(),
    wordValidator(),
    symbolValidator(),
  ]);

    // google Maps configs
    
  @ViewChild("placesRef") placesRef: GooglePlaceDirective | null = null;

  directions: string = "";
  title = 'Mapa de Dirección'
  label = {
    color: 'red',
    text: "Mi ubicacion",
  };

  position = {
    lat: -32.947639465,
    lng: -60.630649567,
  };

  icon = {
    url: "/assets/public/maps/house.png", 
    scaledSize: new google.maps.Size(50, 50), 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0),
    labelOrigin: new google.maps.Point(25, 60)
};


mapOptions = {
  zoom: 8,
  mapId: 'fadc1ec7936b54d3'
};

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    icon: this.icon,
  };

  viewMap: boolean = false;

  private confirmPasswordFormControl = [null, Validators.compose([Validators.required])];
  termsAccepted = false;
  termsFilePath = '/assets/backoffice/terminos-y-condiciones.pdf'

  constructor(private formBuilder: FormBuilder, private dialogService: DialogService, private _store:Store) {
    this.frmSignup = this.registerForm();
    
  }

  ngOnInit(): void {}

  registerForm(): FormGroup {
    return this.formBuilder.group(
      {
        name: this.usernameFormControl,
        useremail: this.useremailFormControl,
        userdirection: this.userdirectionFormControl,
        password: this.passwordFormControl,
        confirmPassword: this.confirmPasswordFormControl,
      },
      
      {
        validator: passwordMatchValidator,
      }
    );
    
  }

  submit() {
    if(this.termsAccepted == false){
      this.getTermsAcceptance();
    }
    if(this.termsAccepted){
      const email = this.frmSignup.get('useremail')?.value;
      const password = this.frmSignup.get('password')?.value;
    }
  }

  getTermsAcceptance(){
    let dialog: DialogData = { 
      type: DialogType.SUCCESS, 
      header: 'Términos y condiciones', 
      content:'Hola', 
      filePDF: this.termsFilePath 
    };
    this.dialogService.show(dialog);
    this.dialogService.DialogSelectionObservable.subscribe(acceptance => this.termsAccepted = acceptance)
    const {name, useremail , userdirection, password, confirmPassword } = this.frmSignup.value;
    try {
      if (password === confirmPassword) {
        this._store.dispatch(
          register({name:name, email: useremail, address:userdirection, password: password})
        );
        
      } else {
        this.frmSignup.get("confirmPassword")?.setErrors({ repeat: true });
        this.frmSignup.get("password")?.setErrors({ repeat: true });
      }
    } catch (error) {
      let dialog: DialogData = { type: DialogType.ERROR, header:  'Error', content: 'El registro fallo'};
      this.dialogService.show(dialog);
      this.frmSignup.reset();
    }
  }

  
  public handleAdressChange(adress: any) {
    this.viewMap = false;
    if (!adress.geometry) {
      this.frmSignup.get("userdirection")?.setErrors({ require: true });
      this.viewMap = false;
      this.frmSignup.get("userdirection")?.setValue("");
    } else {
      this.directions   = adress.formatted_adress;
      this.position.lat = adress.geometry.location.lat();
      this.position.lng = adress.geometry.location.lng();
      timer(500).subscribe(() => {
        this.viewMap = true;
      });
    }
  }

  get direction() {
    return this.frmSignup.get("userdirection");
  }

  get formSignup(): FormGroup {
    return this.frmSignup;
  }

  get usernameControl(): FormControl {
    return this.frmSignup.controls['name'] as FormControl;
  }

  get userdirectionControl(): FormControl {
    return this.frmSignup.controls['userdirection'] as FormControl;
  }

  get useremailControl(): FormControl {
    return this.frmSignup.controls['useremail'] as FormControl;
  }

  get passwordControl(): FormControl {
    return this.frmSignup.controls['password'] as FormControl;
  }

  get confirmPasswordControl(): FormControl {
    return this.frmSignup.controls['confirmPassword'] as FormControl;
  }
}
