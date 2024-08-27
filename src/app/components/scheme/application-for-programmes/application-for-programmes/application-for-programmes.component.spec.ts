import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForProgrammesComponent } from './application-for-programmes.component';

describe('ApplicationForProgrammesComponent', () => {
  let component: ApplicationForProgrammesComponent;
  let fixture: ComponentFixture<ApplicationForProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationForProgrammesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationForProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
