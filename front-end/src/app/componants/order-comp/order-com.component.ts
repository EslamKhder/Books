import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order';
import {OrderServiceService} from '../../service/order-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartOrder} from '../../model/cart-order';
import {CartServiceService} from '../../service/cart-service.service';
import {AuthenticationServiceService} from "../../service/security/authentication-service.service";

@Component({
  selector: 'app-order-com',
  templateUrl: './order-com.component.html',
  styleUrls: ['./order-com.component.css']
})
export class OrderComComponent implements OnInit {

  orders: Order[] = [];
  page: number = 1;
  pageLength: number = 5;
  orderSize: number = 0;
  rderSize: number = 0;
  orderPrice: number = 0;
  orderss: CartOrder[] = [];
  totalOrder: number = 0;
  totalPrice: number = 0;
  // 5 5 5 2
  // 0 1 2 3
  constructor(private order: OrderServiceService,
              private route: ActivatedRoute,
              private cart: CartServiceService,
              private auth: AuthenticationServiceService,
              private orderService: OrderServiceService,
              private router: Router,
              private cartService: CartServiceService) { }


  ngOnInit(): void {
    this.getCartStatus()
    this.route.paramMap.subscribe(
      () => {
        this.finishOrders();
      }
    )
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
    this.orderss = this.cart.orders;
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
  getCartStatus(){
    this.cart.totalOrders.subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.cart.totalPrice.subscribe(
      data => {
        this.orderPrice = data
      }
    )
  }
  isUserLogin(){
    return this.auth.isLogin()
  }


  finishOrders(){
    let result1 = this.route.snapshot.paramMap.has('id');
    let result2 = this.route.snapshot.paramMap.has('key');
    if(result1){
      this.getOrderByCategoryId()
    } else if (result2) {
      this.getAllOrdersContainingKey()
    } else {
      this.getOrders();
    }
  }
  getOrders(){
    this.order.getOrdersLength().subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.order.getOrders(this.page-1,this.pageLength).subscribe(
      data => {
        this.orders = data
        console.log(data)
      }
    )
  }
  getOrderByCategoryId(){
    let idCategory = this.route.snapshot.paramMap.get('id');
    this.order.getOrdersLengthByCategoryId(idCategory).subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.order.getOrdersByCategoryId(idCategory,this.page-1,this.pageLength).subscribe(
      data => {
        this.orders = data
      }
    )
  }
  getAllOrdersContainingKey(){
    let keyWord = this.route.snapshot.paramMap.get('key');
    this.order.getOrdersLengthByKey(keyWord).subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.order.getOrdersByKey(keyWord,this.page-1,this.pageLength).subscribe(
      data => {
        this.orders = data
      }
    )
  }

  doing() {
    this.finishOrders()
  }

  pageSize(event: Event) {
    this.pageLength = +(<HTMLInputElement>event.target).value
    this.finishOrders()
  }


  addToCart(temp: Order) {
    const cartorder = new CartOrder(temp);
    this.cartService.addOrderToCart(cartorder)
  }

  getCode() {
    return  sessionStorage.getItem("code");
  }

  getDate() {
    return new Date();
  }
}
