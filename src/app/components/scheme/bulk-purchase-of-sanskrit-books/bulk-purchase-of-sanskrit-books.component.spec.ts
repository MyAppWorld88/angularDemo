import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkPurchaseOfSanskritBooksComponent } from './bulk-purchase-of-sanskrit-books.component';

describe('BulkPurchaseOfSanskritBooksComponent', () => {
  let component: BulkPurchaseOfSanskritBooksComponent;
  let fixture: ComponentFixture<BulkPurchaseOfSanskritBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkPurchaseOfSanskritBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkPurchaseOfSanskritBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
