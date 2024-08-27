import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsuDetailsComponent } from './csu-details.component';

describe('CsuDetailsComponent', () => {
  let component: CsuDetailsComponent;
  let fixture: ComponentFixture<CsuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsuDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
