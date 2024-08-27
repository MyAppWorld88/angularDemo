import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalTrainingComponent } from './vocational-training.component';

describe('VocationalTrainingComponent', () => {
  let component: VocationalTrainingComponent;
  let fixture: ComponentFixture<VocationalTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocationalTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VocationalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
