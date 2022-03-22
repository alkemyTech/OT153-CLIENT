import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PrimengModule } from '@app/shared/primeng/primeng.module';
import { MessageService } from 'primeng/api';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  const fakeMessageService = jasmine.createSpyObj<MessageService>('MessageService', {
    add: undefined,
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, PrimengModule],
      declarations: [ContactFormComponent],
      providers: [{ provide: MessageService, useValue: fakeMessageService }],
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
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const { debugElement } = fixture;
    spyOn(component, 'submit');

    component.emailControl.setValue('');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    console.log(fakeMessageService.add);
    expect(fakeMessageService.add).toHaveBeenCalledTimes(0);
  });

  it("should call submit method when click 'submit' button", () => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const { debugElement } = fixture;
    component.ngOnInit();
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
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.formContact.valid).toBeTruthy();
  });

  it('should submit if all fields are correct', () => {
    component.emailControl.setValue('test@test.com');
    component.phoneControl.setValue('11551502');
    component.nameControl.setValue('name');
    component.messageControl.setValue('message');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(fakeMessageService.add).toHaveBeenCalledTimes(1);
  });
});
