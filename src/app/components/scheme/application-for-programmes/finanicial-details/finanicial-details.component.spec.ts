import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanicialDetailsComponent } from './finanicial-details.component';

describe('FinanicialDetailsComponent', () => {
  let component: FinanicialDetailsComponent;
  let fixture: ComponentFixture<FinanicialDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanicialDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanicialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
