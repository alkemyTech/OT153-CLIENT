import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDialogTemplateComponent } from './success-dialog-template.component';

describe('SuccessDialogTemplateComponent', () => {
  let component: SuccessDialogTemplateComponent;
  let fixture: ComponentFixture<SuccessDialogTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessDialogTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
