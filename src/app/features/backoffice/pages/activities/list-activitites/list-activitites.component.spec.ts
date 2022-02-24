import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivititesComponent } from './list-activitites.component';

describe('ListActivititesComponent', () => {
  let component: ListActivititesComponent;
  let fixture: ComponentFixture<ListActivititesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActivititesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActivititesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
