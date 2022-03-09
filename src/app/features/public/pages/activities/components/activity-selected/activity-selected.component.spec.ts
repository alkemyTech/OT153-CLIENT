import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySelectedComponent } from './activity-selected.component';

describe('ActivitySelectedComponent', () => {
  let component: ActivitySelectedComponent;
  let fixture: ComponentFixture<ActivitySelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
