import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { LoginFormComponent } from './login-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { of} from 'rxjs';
import { DialogService } from '@core/services/dialog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from "@angular/platform-browser";

const VALID_EMAIL = 'ngUnit@test.com';
const INVALID_EMAIL = 'NO@Email.';

describe("Testing Login Form Component", () => {

  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  
  //? 6 test
  describe('Verification of login form fields', () => {
    const storeMock = jasmine.createSpyObj('Store', ['select','dispatch']);
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

      storeMock.dispatch()
  
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
      control?.setValue(VALID_EMAIL);
      expect( control?.valid ).toBeTruthy();
    });

    it("Email field should verify that the format is not an email",()=>{
      const control = component.loginForm.get('email');
      control?.setValue(INVALID_EMAIL);
      expect( control?.valid ).toBeFalsy();
    });

    it("Form should verify that it has been valid",()=>{
      component.loginForm.get('email')?.setValue(VALID_EMAIL);
      component.loginForm.get('password')?.setValue('password_502');
      expect(component.loginForm.valid).toBeTruthy();
    });
    //? 6 test
  })
  
  // ? 1 test
  describe('Verification of store', () => {
    const storeMock = jasmine.createSpyObj('Store', ['select','dispatch']);
    beforeEach(async () => {
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
  
      storeMock.dispatch()
  
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

    it("Should make a call to the store when submit",async ()=>{
      component.loginForm.get('email')?.setValue(VALID_EMAIL);
      component.loginForm.get('password')?.setValue('password');
      fixture.detectChanges();
      fixture.nativeElement.querySelector("#btn_submit").click();

      expect(storeMock.dispatch).toHaveBeenCalled();
    });

    // ? 1 test
  })

  // ? 4 test
  describe('Verification of error message', () => {
    const storeMock = jasmine.createSpyObj('Store', ['select','dispatch']);
    beforeEach(async () => {
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

      storeMock.dispatch()
  
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

    it("Should have email error message",fakeAsync(()=>{
      fixture.detectChanges();
      component.getControl('email')?.markAsTouched();
      setInputValue('#email','');
      let errorMessage = fixture.debugElement.query(By.css('#email-help')).nativeElement;
      expect(errorMessage).toBeTruthy();
    }));

    it("NOT should have email error message",fakeAsync(()=>{
      fixture.detectChanges();      
      let errorMessage = fixture.debugElement.query(By.css('#email-help'));
      expect(errorMessage).toBeNull();
    }));

    it("Should have password error message",fakeAsync(()=>{
      fixture.detectChanges();
      component.getControl('password')?.markAsTouched()
      setInputValue('#password','')

      let errorMessage = fixture.debugElement.query(By.css('#password-help')).nativeElement;
      expect(errorMessage).toBeTruthy();
    }));

    it("NOT should have password error message",fakeAsync(()=>{
      fixture.detectChanges();
      let errorMessage = fixture.debugElement.query(By.css('#password-help'));
      expect(errorMessage).toBeNull();
    }));

    // ? 4 test
  });

  //? 3 test
  describe('Verification of buttons', () => {
    const storeMock = jasmine.createSpyObj('Store', ['select','dispatch']);
    beforeEach(async () => {
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

      storeMock.dispatch()
  
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

    it("Should call onLogin when the form is valid",async ()=>{
      const spy = spyOn(component, 'onLogin');

      component.loginForm.get('email')?.setValue(VALID_EMAIL);
      component.loginForm.get('password')?.setValue('password');
      fixture.detectChanges();
      fixture.nativeElement.querySelector("#btn_submit").click();

      expect(storeMock.dispatch).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
    });

    it("Should not call onLogin when the form is valid",async ()=>{
      const spy = spyOn(component, 'onLogin');
      
      component.loginForm.get('email')?.setValue(INVALID_EMAIL);
      component.loginForm.get('password')?.setValue('password');
      fixture.detectChanges();
      fixture.nativeElement.querySelector("#btn_submit").click();

      expect(spy).toHaveBeenCalledTimes(0);
    });

    it("Should call loginGoogle when the form is valid",async ()=>{
      const spy = spyOn(component, 'loginGoogle')
      fixture.nativeElement.querySelector("#btn_googleLogin").click();
      expect(storeMock.dispatch).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    // ? 3 test
  })


  //*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
  //*** - FUNCTIONS *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

  function setInputValue(selector: string, value: string) {
    fixture.detectChanges();
    tick();

    let input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }



});