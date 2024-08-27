import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProgrammesActivitiesComponent } from './details-programmes-activities.component';

describe('DetailsProgrammesActivitiesComponent', () => {
  let component: DetailsProgrammesActivitiesComponent;
  let fixture: ComponentFixture<DetailsProgrammesActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsProgrammesActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsProgrammesActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
