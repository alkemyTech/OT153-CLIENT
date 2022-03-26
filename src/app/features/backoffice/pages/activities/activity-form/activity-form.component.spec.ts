import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityFormComponent } from './activity-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { DialogService } from '@core/services/dialog.service';


describe('Testing Activity Form Component', () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;

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
      providers: [
        { provide: Store, useValue: storeMock },
        DialogService,
        MessageService
      ],
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

  it('Field image should be mandatory', () =>{
    const control = component.form.get('image');
    control?.setValue('');
   
    expect( control?.valid ).toBeFalsy();
  });
});