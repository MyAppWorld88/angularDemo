import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousGrantsComponent } from './previous-grants.component';

describe('PreviousGrantsComponent', () => {
  let component: PreviousGrantsComponent;
  let fixture: ComponentFixture<PreviousGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousGrantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
