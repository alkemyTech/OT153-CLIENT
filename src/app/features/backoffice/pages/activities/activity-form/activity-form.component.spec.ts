import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFormComponent } from './activity-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';


let authState = {
  auth: false,
  isAdmin: false,
  user: null,
  googleUser: null,
  token!: null,
  isGoogleAuth: false
}


describe('Testing Activity Form Component', () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;
  let element;

  let activitiesState = {
    responseAll: [],
    response: {id: 0, name: '', description:''},
    delete:  { success: false , data: '', message: '' },
    error: new HttpErrorResponse({}),
  }

  const storeMock = jasmine.createSpyObj('store', ['select']);


  beforeEach(async () => {
    storeMock.select.and.returnValue(
      of(activitiesState)
    );

    await TestBed.configureTestingModule({
      declarations: [ActivityFormComponent],
      imports: [RouterTestingModule, StoreModule.forRoot({}, {}),],
      providers: [{ provide: Store, useValue: storeMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should load three fields', () =>{
    expect( component.form.contains('name')).toBeTruthy();
    expect( component.form.contains('image')).toBeTruthy();
    expect( component.form.contains('description')).toBeTruthy();
  });

  it('Field name should be mandatory', () =>{
    const control = component.form.get('name');
    control?.setValue('');
   
    expect( control?.valid ).toBeFalsy();
  });

  // it('should upload the file', () => {
  //   component.selectFile(new Event('change'));
  //   const inputEl = element.querySelector('#image_file');
  //   const fileList = { 0: { name: 'foo', size: 500001 } };
  //   inputEl.value = {
  //       target: {
  //           files: fileList
  //       }
  //   };
  //   inputEl.dispatchEvent(new Event('change'));     
  // });

  it('Only logged user should be able to navigate form', () =>{

  });
});
