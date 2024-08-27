import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForVocComponent } from './application-for-voc.component';

describe('ApplicationForVocComponent', () => {
  let component: ApplicationForVocComponent;
  let fixture: ComponentFixture<ApplicationForVocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationForVocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationForVocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
