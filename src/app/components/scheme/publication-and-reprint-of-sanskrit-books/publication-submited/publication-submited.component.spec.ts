import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSubmitedComponent } from './publication-submited.component';

describe('PublicationSubmitedComponent', () => {
  let component: PublicationSubmitedComponent;
  let fixture: ComponentFixture<PublicationSubmitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationSubmitedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationSubmitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
