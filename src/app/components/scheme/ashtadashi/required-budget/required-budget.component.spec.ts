import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredBudgetComponent } from './required-budget.component';

describe('RequiredBudgetComponent', () => {
  let component: RequiredBudgetComponent;
  let fixture: ComponentFixture<RequiredBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequiredBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequiredBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
