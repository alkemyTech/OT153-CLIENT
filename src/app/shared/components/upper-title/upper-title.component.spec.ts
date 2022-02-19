import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperTitleComponent } from './upper-title.component';

describe('UpperTitleComponent', () => {
  let component: UpperTitleComponent;
  let fixture: ComponentFixture<UpperTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
