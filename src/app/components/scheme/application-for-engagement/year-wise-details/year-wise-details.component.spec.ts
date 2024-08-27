import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearWiseDetailsComponent } from './year-wise-details.component';

describe('YearWiseDetailsComponent', () => {
  let component: YearWiseDetailsComponent;
  let fixture: ComponentFixture<YearWiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearWiseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearWiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
