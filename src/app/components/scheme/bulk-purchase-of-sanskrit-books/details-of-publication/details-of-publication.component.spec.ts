import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfPublicationComponent } from './details-of-publication.component';

describe('DetailsOfPublicationComponent', () => {
  let component: DetailsOfPublicationComponent;
  let fixture: ComponentFixture<DetailsOfPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsOfPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
