import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingExperianceComponent } from './teaching-experiance.component';

describe('TeachingExperianceComponent', () => {
  let component: TeachingExperianceComponent;
  let fixture: ComponentFixture<TeachingExperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingExperianceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
