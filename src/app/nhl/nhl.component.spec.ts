import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlComponent } from './nhl.component';

describe('NhlComponent', () => {
  let component: NhlComponent;
  let fixture: ComponentFixture<NhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
