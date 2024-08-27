import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantRecievedDetailsComponent } from './grant-recieved-details.component';

describe('GrantRecievedDetailsComponent', () => {
  let component: GrantRecievedDetailsComponent;
  let fixture: ComponentFixture<GrantRecievedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrantRecievedDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrantRecievedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
