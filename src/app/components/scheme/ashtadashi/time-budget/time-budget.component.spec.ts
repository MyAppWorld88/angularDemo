import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBudgetComponent } from './time-budget.component';

describe('TimeBudgetComponent', () => {
  let component: TimeBudgetComponent;
  let fixture: ComponentFixture<TimeBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
