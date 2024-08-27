import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureDetailsComponent } from './infrastructure-details.component';

describe('InfrastructureDetailsComponent', () => {
  let component: InfrastructureDetailsComponent;
  let fixture: ComponentFixture<InfrastructureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastructureDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfrastructureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
