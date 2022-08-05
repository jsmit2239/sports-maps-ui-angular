import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlScheduleComponent } from './nhl-schedule.component';

describe('NhlScheduleComponent', () => {
  let component: NhlScheduleComponent;
  let fixture: ComponentFixture<NhlScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhlScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhlScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
