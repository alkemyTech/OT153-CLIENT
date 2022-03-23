import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DialogService } from '@app/core/services/dialog.service';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { PrimengModule } from '@app/shared/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { of, throwError } from 'rxjs';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  const fakeMessageService = jasmine.createSpyObj<MessageService>('MessageService', {
    add: undefined,
  });

  const fakeApiService = jasmine.createSpyObj<PublicapiService>('PublicapiService', {
    postContact: of(),
  });

  const fakeDialogService = jasmine.createSpyObj<DialogService>('DialogService', {
    show: undefined,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, PrimengModule, HttpClientTestingModule],
      declarations: [ContactFormComponent],
      providers: [
        { provide: MessageService, useValue: fakeMessageService },
        { provide: PublicapiService, useValue: fakeApiService },
        { provide: DialogService, useValue: fakeDialogService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send the form if it is invalid', () => {
    spyOn(component, 'submit');
    component.emailControl.setValue('');
    spyOn(component, 'sendMessage');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.sendMessage).toHaveBeenCalledTimes(0);
  });

  it("should call submit method when click 'submit' button", () => {
    spyOn(component, 'submit');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.submit).toHaveBeenCalledTimes(1);
  });

  it('form should be invalid when all the fields are missing', () => {
    spyOn(component, 'submit');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.formContact.valid).toBeFalsy();
  });

  it("should display error message when 'email' field is incorrect or empty", () => {
    component.emailControl.markAsTouched();
    component.emailControl.setValue('');
    expect(component.emailControl.errors).toBeTruthy();

    fixture.detectChanges();
    let errorMessage = fixture.debugElement.query(By.css('#email-help')).nativeElement;
    expect(errorMessage).toBeTruthy();

    component.emailControl.setValue('foo');
    expect(errorMessage).toBeTruthy();
    expect(component.emailControl.errors).toBeTruthy();
  });

  it("should display error message when 'phone' field is incorrect or empty", () => {
    component.phoneControl.markAsTouched();
    component.phoneControl.setValue('');
    fixture.detectChanges();
    let errorMessage = fixture.debugElement.query(By.css('#phone-help')).nativeElement;
    expect(errorMessage).toBeTruthy();
    component.phoneControl.setValue('1111');

    expect(errorMessage).toBeTruthy();
    expect(component.phoneControl.errors).toBeTruthy();
  });

  it("should display error message when 'name' field is empty", () => {
    component.nameControl.markAsTouched();
    component.nameControl.setValue('');
    fixture.detectChanges();
    let errorMessage = fixture.debugElement.query(By.css('#name-help')).nativeElement;

    expect(errorMessage).toBeTruthy();
    expect(component.nameControl.errors).toBeTruthy();
  });

  it("should display error message when 'message' field is empty", () => {
    component.messageControl.markAsTouched();
    component.messageControl.setValue('');
    fixture.detectChanges();
    let errorMessage = fixture.debugElement.query(By.css('#message-help')).nativeElement;

    expect(errorMessage).toBeTruthy();
    expect(component.messageControl.errors).toBeTruthy();
  });

  it('form should be valid when ALL required fields are filled', () => {
    spyOn(component, 'submit');
    component.emailControl.setValue('test@test.com');
    component.phoneControl.setValue('11551502');
    component.nameControl.setValue('name');
    component.messageControl.setValue('message');

    expect(component.formContact.valid).toBeTruthy();
  });

  it('should submit if all fields are correct and display a success message', () => {
    component.emailControl.setValue('test@test.com');
    component.phoneControl.setValue('11551502');
    component.nameControl.setValue('name');
    component.messageControl.setValue('message');
    fakeApiService.postContact.and.returnValue(of({ status: 200, success: 'true', message: 'contacted' }));
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(fakeApiService.postContact).toHaveBeenCalled();
    expect(fakeMessageService.add).toHaveBeenCalledTimes(1);
  });

  it('should display an error dialog if there is an error from the server response', () => {
    fakeApiService.postContact.and.returnValue(
      throwError(new HttpErrorResponse({ error: '404 - Not Found', status: 404 }))
    );
    component.sendMessage();

    expect(fakeApiService.postContact).toHaveBeenCalled();
    expect(fakeDialogService.show).toHaveBeenCalledTimes(1);
  });
});
