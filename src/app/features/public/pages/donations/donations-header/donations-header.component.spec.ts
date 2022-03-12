import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsHeaderComponent } from './donations-header.component';

describe('DonationsHeaderComponent', () => {
  let component: DonationsHeaderComponent;
  let fixture: ComponentFixture<DonationsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
