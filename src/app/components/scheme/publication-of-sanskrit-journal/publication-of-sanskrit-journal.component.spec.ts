import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationOfSanskritJournalComponent } from './publication-of-sanskrit-journal.component';

describe('PublicationOfSanskritJournalComponent', () => {
  let component: PublicationOfSanskritJournalComponent;
  let fixture: ComponentFixture<PublicationOfSanskritJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationOfSanskritJournalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationOfSanskritJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
