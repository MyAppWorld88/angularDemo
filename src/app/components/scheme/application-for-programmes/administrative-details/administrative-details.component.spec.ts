import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeDetailsComponent } from './administrative-details.component';

describe('AdministrativeDetailsComponent', () => {
  let component: AdministrativeDetailsComponent;
  let fixture: ComponentFixture<AdministrativeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrativeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
