import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorDetailsComponent } from './investigator-details.component';

describe('InvestigatorDetailsComponent', () => {
  let component: InvestigatorDetailsComponent;
  let fixture: ComponentFixture<InvestigatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigatorDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
