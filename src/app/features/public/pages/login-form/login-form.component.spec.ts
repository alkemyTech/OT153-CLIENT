import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginFormComponent } from './login-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { DialogService } from '@core/services/dialog.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from "@angular/platform-browser";
 
describe("Testing Login Form Component", () => {

  const storeMock = jasmine.createSpyObj('Store', ['select','dispatch']);
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;


  beforeAll(async () => {
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

  beforeAll(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  //? 6 test
  describe('Verification of login form fields', () => {

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

  // ?
  xdescribe('Verification of login form submit', () => {

    it("Deberia cambiar el estado de auth a verdadero",()=>{
      spyOn(component, 'onLogin');

      component.loginForm.get('email')?.value('ngUnit@test.com');
      component.loginForm.get('password')?.value('password');

      let button = fixture.debugElement.query(By.css('button')).nativeElement;
      fixture.detectChanges();
      button.click();

      expect(component.onLogin).toHaveBeenCalledTimes(1);
      
    });


  })
 
  xdescribe('', () => {

    it('', () => {
      
    })

  })

});