import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagedTeacherComponent } from './engaged-teacher.component';

describe('EngagedTeacherComponent', () => {
  let component: EngagedTeacherComponent;
  let fixture: ComponentFixture<EngagedTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagedTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngagedTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
