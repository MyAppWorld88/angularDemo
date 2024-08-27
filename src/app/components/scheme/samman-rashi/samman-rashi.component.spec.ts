import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SammanRashiComponent } from './samman-rashi.component';

describe('SammanRashiComponent', () => {
  let component: SammanRashiComponent;
  let fixture: ComponentFixture<SammanRashiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SammanRashiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SammanRashiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
