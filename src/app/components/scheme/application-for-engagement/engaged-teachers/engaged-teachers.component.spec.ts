import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagedTeachersComponent } from './engaged-teachers.component';

describe('EngagedTeachersComponent', () => {
  let component: EngagedTeachersComponent;
  let fixture: ComponentFixture<EngagedTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagedTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngagedTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
