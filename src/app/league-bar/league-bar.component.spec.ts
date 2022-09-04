import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueBarComponent } from './league-bar.component';

describe('LeagueBarComponent', () => {
  let component: LeagueBarComponent;
  let fixture: ComponentFixture<LeagueBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LeagueBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
