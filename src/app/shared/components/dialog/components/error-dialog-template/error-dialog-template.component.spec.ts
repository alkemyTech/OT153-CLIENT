import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogTemplateComponent } from './error-dialog-template.component';

describe('ErrorDialogTemplateComponent', () => {
  let component: ErrorDialogTemplateComponent;
  let fixture: ComponentFixture<ErrorDialogTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDialogTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
