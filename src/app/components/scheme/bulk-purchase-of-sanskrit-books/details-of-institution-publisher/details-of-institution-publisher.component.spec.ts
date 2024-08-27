import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfInstitutionPublisherComponent } from './details-of-institution-publisher.component';

describe('DetailsOfInstitutionPublisherComponent', () => {
  let component: DetailsOfInstitutionPublisherComponent;
  let fixture: ComponentFixture<DetailsOfInstitutionPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfInstitutionPublisherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsOfInstitutionPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
