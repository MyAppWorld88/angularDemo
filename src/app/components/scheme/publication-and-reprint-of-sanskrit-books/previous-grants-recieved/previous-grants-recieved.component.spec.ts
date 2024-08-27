import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousGrantsRecievedComponent } from './previous-grants-recieved.component';

describe('PreviousGrantsRecievedComponent', () => {
  let component: PreviousGrantsRecievedComponent;
  let fixture: ComponentFixture<PreviousGrantsRecievedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousGrantsRecievedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousGrantsRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
