import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAndReprintOfSanskritBooksComponent } from './publication-and-reprint-of-sanskrit-books.component';

describe('PublicationAndReprintOfSanskritBooksComponent', () => {
  let component: PublicationAndReprintOfSanskritBooksComponent;
  let fixture: ComponentFixture<PublicationAndReprintOfSanskritBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationAndReprintOfSanskritBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationAndReprintOfSanskritBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
