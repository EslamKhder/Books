import { ComponentFixture, TestBed } from '@angular/core/testing';

import {OrderComComponent} from "./order-com.component";

describe('OrderItemsComponent', () => {
  let component: OrderComComponent;
  let fixture: ComponentFixture<OrderComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
