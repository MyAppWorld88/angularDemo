import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShastraChudamaniComponent } from './shastra-chudamani.component';

describe('ShastraChudamaniComponent', () => {
  let component: ShastraChudamaniComponent;
  let fixture: ComponentFixture<ShastraChudamaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShastraChudamaniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShastraChudamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
