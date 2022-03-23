import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneFormatPipe } from '@app/shared/pipes/phone-format.pipe';

import { ContactInfoComponent } from './contact-info.component';

describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<ContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactInfoComponent],
      providers: [PhoneFormatPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
