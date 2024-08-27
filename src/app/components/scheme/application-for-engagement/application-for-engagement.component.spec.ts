import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForEngagementComponent } from './application-for-engagement.component';

describe('ApplicationForEngagementComponent', () => {
  let component: ApplicationForEngagementComponent;
  let fixture: ComponentFixture<ApplicationForEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationForEngagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationForEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
