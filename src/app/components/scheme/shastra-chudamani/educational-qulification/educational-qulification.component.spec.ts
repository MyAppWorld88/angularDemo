import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalQulificationComponent } from './educational-qulification.component';

describe('EducationalQulificationComponent', () => {
  let component: EducationalQulificationComponent;
  let fixture: ComponentFixture<EducationalQulificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalQulificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalQulificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
