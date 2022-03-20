import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsSchoolComponent } from './campaigns-school.component';

describe('CampaignsSchoolComponent', () => {
  let component: CampaignsSchoolComponent;
  let fixture: ComponentFixture<CampaignsSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignsSchoolComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
