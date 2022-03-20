import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysHeaderComponent } from './header.component';

describe('ToysHeaderComponent', () => {
  let component: ToysHeaderComponent;
  let fixture: ComponentFixture<ToysHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
