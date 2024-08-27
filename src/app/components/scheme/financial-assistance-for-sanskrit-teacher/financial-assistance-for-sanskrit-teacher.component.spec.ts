import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAssistanceForSanskritTeacherComponent } from './financial-assistance-for-sanskrit-teacher.component';

describe('FinancialAssistanceForSanskritTeacherComponent', () => {
  let component: FinancialAssistanceForSanskritTeacherComponent;
  let fixture: ComponentFixture<FinancialAssistanceForSanskritTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialAssistanceForSanskritTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialAssistanceForSanskritTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
