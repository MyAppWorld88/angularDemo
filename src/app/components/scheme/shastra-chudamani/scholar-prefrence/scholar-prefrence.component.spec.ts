import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarPrefrenceComponent } from './scholar-prefrence.component';

describe('ScholarPrefrenceComponent', () => {
  let component: ScholarPrefrenceComponent;
  let fixture: ComponentFixture<ScholarPrefrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarPrefrenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholarPrefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
