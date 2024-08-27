import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfGrantComponent } from './details-of-grant.component';

describe('DetailsOfGrantComponent', () => {
  let component: DetailsOfGrantComponent;
  let fixture: ComponentFixture<DetailsOfGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfGrantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsOfGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
