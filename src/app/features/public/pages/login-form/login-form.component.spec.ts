import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginFormComponent } from './login-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { from, of, Subject } from 'rxjs';
import { DialogService } from '@core/services/dialog.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from "@angular/platform-browser";
import { AuthState } from "@app/core/redux/auth/auth.reducers";
import { ActivatedRoute, Router } from "@angular/router";

describe("Testing Login Form Component", () => {

  const storeMock = jasmine.createSpyObj('Store', ['select','dispatch']);
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeAll(async () => {
    let state = {
        auth: false,
        isAdmin: false,
        user: null,
        googleUser: null,
        token!: null,
        isGoogleAuth: false
    }

    storeMock.select.and.returnValue(
      of(state)
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

  beforeAll(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  //? 6 test
  xdescribe('Verification of login form fields', () => {

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

    it("Form should verify that it has been valid",()=>{
      component.loginForm.get('email')?.setValue('test@test.com');
      component.loginForm.get('password')?.setValue('password_502');
      expect(component.loginForm.valid).toBeTruthy();
    });
    //? 6 test
  })


  beforeAll(async () => {
    let state = {
        auth: false,
        isAdmin: false,
        user: null,
        googleUser: null,
        token!: null,
        isGoogleAuth: false
    }

    storeMock.select.and.returnValue(
      of(state)
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

  beforeAll(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  // ?
  describe('Verification of login form submit', () => {

    it("It should change the auth state to true",()=>{
      
      component.loginForm.get('email')?.setValue('test@test.com');
      component.loginForm.get('password')?.setValue('password');
      
      const btnSubmit = fixture.debugElement.query(By.css('#btn_submit'))
      btnSubmit.nativeElement.click()
      
      expect(component.authentication$).toBeTruthy();

    });

    it("It should change the auth state to false",()=>{
      
      component.loginForm.get('email')?.setValue('test@');
      component.loginForm.get('password')?.setValue('');
      
      const btnSubmit = fixture.debugElement.query(By.css('#btn_submit'))
      btnSubmit.nativeElement.click()
      
      expect(component.authentication$).toBeFalsy();

    });

  })
 
  afterEach(async () => {
    fixture.destroy();
  });

});