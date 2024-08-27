import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentMemberComponent } from './dependent-member.component';

describe('DependentMemberComponent', () => {
  let component: DependentMemberComponent;
  let fixture: ComponentFixture<DependentMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependentMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependentMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
