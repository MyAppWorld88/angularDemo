import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanskritPromotionComponent } from './sanskrit-promotion.component';

describe('SanskritPromotionComponent', () => {
  let component: SanskritPromotionComponent;
  let fixture: ComponentFixture<SanskritPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanskritPromotionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanskritPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
