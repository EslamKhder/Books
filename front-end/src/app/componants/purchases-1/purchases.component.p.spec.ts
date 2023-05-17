import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesComponentP } from './purchases.component.p';

describe('PurchasesComponent', () => {
  let component: PurchasesComponentP;
  let fixture: ComponentFixture<PurchasesComponentP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesComponentP ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesComponentP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
