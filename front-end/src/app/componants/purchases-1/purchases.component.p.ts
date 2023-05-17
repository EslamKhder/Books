import { Component, OnInit } from '@angular/core';
import {CartOrder} from '../../model/cart-order';
import {CartServiceService} from '../../service/cart-service.service';
import {Router} from '@angular/router';
import {Order} from "../../model/order";
import {OrderServiceService} from "../../service/order-service.service";

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.p.html',
  styleUrls: ['./purchases.component.p.css']
})
export class PurchasesComponentP implements OnInit {

  orders: CartOrder[] = [];
  totalOrder: number = 0;
  totalPrice: number = 0;
  constructor(private orderService: OrderServiceService,
              private cart: CartServiceService,
              private router: Router,
              private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getAllOrders()
    this.getTotals()
    this.cart.calculateTotals()
  }

  getTotals(){
    this.cart.totalOrders.subscribe(
      data => {
        this.totalOrder = data
      }
    )
    this.cart.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    )
  }
  getAllOrders(){
    this.orders = this.cart.orders;
  }

  addOrder(temp: CartOrder,size: number) {
    this.cart.clear(temp,temp.quantity)
    for (let i=0;i<=size;i++){
      this.cart.addOrderToCart(temp)
    }

  }

  removeOrder(temp: CartOrder) {
    this.cart.removeOrder(temp)
  }

  remove(temp: CartOrder) {
    this.cart.remove(temp)
  }

  checkOut() {
    this.router.navigateByUrl('/checkout')
  }

  addToCard(order: Order) {
    const orderCart = new CartOrder(order);
    this.cartService.addOrderToCart(orderCart);
  }
}
