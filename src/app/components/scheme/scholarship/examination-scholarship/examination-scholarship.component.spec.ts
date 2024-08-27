import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationScholarshipComponent } from './examination-scholarship.component';

describe('ExaminationScholarshipComponent', () => {
  let component: ExaminationScholarshipComponent;
  let fixture: ComponentFixture<ExaminationScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExaminationScholarshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExaminationScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
