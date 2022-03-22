import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginFormComponent } from './login-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { DialogService } from '@core/services/dialog.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
describe("Testing Login Form Component", () => {

  const storeMock = jasmine.createSpyObj('Store', ['select']);

  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  describe('Verification of login form fields', () =>{

    beforeEach(async () => {
      storeMock.select.and.returnValue(
        of({
          auth: false,
          isAdmin: false,
          user: null,
          googleUser: null,
          token!: null,
          isGoogleAuth: false
        })
      );
  
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({}, {}),
          FormsModule,
          ReactiveFormsModule,
          CommonModule
        ],
        declarations: [LoginFormComponent],
        providers: [
          { provide: Store, useValue: storeMock },
          DialogService,
          MessageService
        ],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(LoginFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('There should be a form to log in.', () => {
      expect( component.loginForm.contains('email')).toBeTruthy();
      expect( component.loginForm.contains('password')).toBeTruthy();
    })

    it("Email field should be required",()=>{
      const control = component.loginForm.get('email');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });

    it("Password field should be required",()=>{
      const control = component.loginForm.get('email');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });
  
    it("Email field should check the email format",()=>{
      const control = component.loginForm.get('email');
      control?.setValue('ngUnit@test.com');
      expect( control?.valid ).toBeTruthy();
    });

    it("Email field should verify that the format is not an email",()=>{
      const control = component.loginForm.get('email');
      control?.setValue('NO@Email.');
      expect( control?.valid ).toBeFalsy();
    });

  })

  xdescribe('Login form addressing verification', () =>{

    beforeEach(async () => {
      storeMock.select.and.returnValue(
        of({
          auth: false,
          isAdmin: false,
          user: null,
          googleUser: null,
          token!: null,
          isGoogleAuth: false
        })
      );
  
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({}, {}),
          FormsModule,
          ReactiveFormsModule,
          CommonModule
        ],
        declarations: [LoginFormComponent],
        providers: [
          { provide: Store, useValue: storeMock },
          DialogService,
          MessageService
        ],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(LoginFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    



  })
 
});