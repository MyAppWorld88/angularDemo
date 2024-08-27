import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfPreviousGrantsComponent } from './details-of-previous-grants.component';

describe('DetailsOfPreviousGrantsComponent', () => {
  let component: DetailsOfPreviousGrantsComponent;
  let fixture: ComponentFixture<DetailsOfPreviousGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfPreviousGrantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsOfPreviousGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
