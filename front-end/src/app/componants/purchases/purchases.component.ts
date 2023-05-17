import { Component, OnInit } from '@angular/core';
import {CartOrder} from '../../model/cart-order';
import {CartServiceService} from '../../service/cart-service.service';
import {Router} from '@angular/router';
import {Client} from "../../model/client";
import {Address} from "../../model/address";
import {RequestOrder} from "../../model/request-order";
import {Item} from "../../model/item";
import {PurchaseRequest} from "../../model/purchase-request";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Country} from "../../model/country";
import {State} from "../../model/state";
import {StateCountryServiceService} from "../../service/state-country-service.service";
import {PurchaseServiceService} from "../../service/purchase-service.service";
import {SpaceValidator} from "../../model/space-validator";

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  checkoutParentGroup: FormGroup;
  countries: Country[] = [];
  statesFromPerson: State[] = [];
  statesToPerson: State[] = [];
  totalSize: number = 0;
  totalPrice: number= 0;
  orders: CartOrder[] = [];
  totalOrder: number = 0;

  constructor(private cart: CartServiceService,
              private formChildGroup: FormBuilder,
              private stateCountry: StateCountryServiceService,
              private card: CartServiceService,
              private ps: PurchaseServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.myForm()
    this.getAllCountries()
    this.getTotals()

    this.getAllOrders()
    this.getTotals()
    this.cart.calculateTotals()
    //this.getAllStates()
    //this.getStatesByCode()
  }

  myForm(){
    this.checkoutParentGroup = this.formChildGroup.group({
      data: this.formChildGroup.group({
        fullName: new FormControl(sessionStorage.getItem("name"),[
          Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.minLength(6)]),
        gmail: new FormControl(sessionStorage.getItem("phone"),[
          Validators.required,
        ]),
        phone: new FormControl(sessionStorage.getItem("address"),[
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]*$')
        ])
      }),
      fromPerson: this.formChildGroup.group({
        country: [''],
        state: [''],
        zipCode: ['']
      }),
      toPerson: this.formChildGroup.group({
        country: [''],
        state: [''],
        zipCode: ['']
      }),
      creditCard: this.formChildGroup.group({
        cardType: [''],
        cardNumber: [''],
        code: ['']
      })
    })
  }
  get fullName(){
    return this.checkoutParentGroup.get('data.fullName')
  }
  get email(){
    return this.checkoutParentGroup.get('data.gmail')
  }
  get phone(){
    return this.checkoutParentGroup.get('data.phone')
  }


  done() {
      /* #1 */
      let client: Client = new Client();
      client.name = this.checkoutParentGroup.controls['data'].value.fullName;
      client.email = this.checkoutParentGroup.controls['data'].value.gmail;
      client.xx = sessionStorage.getItem("email");
      client.phoneNumber = this.checkoutParentGroup.controls['data'].value.phone;

      /* #2 */
      let fromAddress: Address =  this.checkoutParentGroup.controls['fromPerson'].value
      fromAddress.state = fromAddress.state['name']
      /* #3 */
      let toAddress: Address =  this.checkoutParentGroup.controls['toPerson'].value;
      toAddress.state = toAddress.state['name']

      /* #4 */
      let requestOrder = new RequestOrder();
      requestOrder.totalPrice = this.totalPrice;
      requestOrder.totalQuantity = this.totalSize;
      /* #5 */
      let orders: CartOrder[] = this.card.orders;
      let items: Item[]  = orders.map(order => new Item(order));
      /* #6 */
      let purchaseRequest = new PurchaseRequest();
      purchaseRequest.client = client;
      purchaseRequest.fromAddress = fromAddress;
      purchaseRequest.toAddress = toAddress;
      purchaseRequest.requestOrder = requestOrder;
      purchaseRequest.items = items;
      this.ps.getOrder(purchaseRequest).subscribe({
        next: response=> {
          sessionStorage.setItem("code",response.code)
          sessionStorage.setItem("idRO",response.id)
          alert("Your Name : " + response.name)
          alert("Your Code : " + response.code)
          this.clean()
        },
        error: error =>{
          console.log("Error is : " + error.message)
        }
      })

  }
  clean(){
    // this.card.orders = [];
    // this.card.totalOrders.next(0);
    // this.card.totalPrice.next(0);
    // this.checkoutParentGroup.reset();
    this.router.navigateByUrl("/com")

  }

  similarGroup(event: Event) {
    if((<HTMLInputElement>event.target).checked){
      this.checkoutParentGroup.controls.toPerson
        .setValue(this.checkoutParentGroup.controls.fromPerson.value)
      this.statesToPerson = this.statesFromPerson

    } else {
      this.checkoutParentGroup.controls.toPerson.reset()
    }
  }

  getAllCountries(){
    this.stateCountry.getAllCountry().subscribe(
      data => {
        this.countries = data
      }
    )
  }
  /*getAllStates() {
    this.stateCountry.getAllStates().subscribe(
      data => {
        this.states = data
      }
    )
  }*/
  getStatesByCode(typeForm){
    const code = this.checkoutParentGroup.get(`${typeForm}.country`).value

    this.stateCountry.getStatesByCode(code).subscribe(
      data =>{
        if(typeForm === 'fromPerson'){
          this.statesFromPerson = data
        } else {
          this.statesToPerson = data
        }
        this.checkoutParentGroup.get(`${typeForm}.state`).setValue(data[0])
      }
    )
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

  addOrder(temp: CartOrder) {
    this.cart.addOrderToCart(temp)
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


}
