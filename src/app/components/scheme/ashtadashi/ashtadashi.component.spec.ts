import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshtadashiComponent } from './ashtadashi.component';

describe('AshtadashiComponent', () => {
  let component: AshtadashiComponent;
  let fixture: ComponentFixture<AshtadashiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AshtadashiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AshtadashiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
