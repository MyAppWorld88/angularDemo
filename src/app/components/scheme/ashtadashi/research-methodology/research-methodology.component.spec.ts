import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchMethodologyComponent } from './research-methodology.component';

describe('ResearchMethodologyComponent', () => {
  let component: ResearchMethodologyComponent;
  let fixture: ComponentFixture<ResearchMethodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchMethodologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchMethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
