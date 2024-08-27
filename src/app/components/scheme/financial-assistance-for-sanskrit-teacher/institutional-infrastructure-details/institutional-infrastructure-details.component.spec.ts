import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalInfrastructureDetailsComponent } from './institutional-infrastructure-details.component';

describe('InstitutionalInfrastructureDetailsComponent', () => {
  let component: InstitutionalInfrastructureDetailsComponent;
  let fixture: ComponentFixture<InstitutionalInfrastructureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalInfrastructureDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalInfrastructureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
