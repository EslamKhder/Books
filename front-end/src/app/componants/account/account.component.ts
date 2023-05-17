import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';
import {UserData} from "../../model/UserData";
import {OrderServiceService} from "../../service/order-service.service";
import {CartServiceService} from "../../service/cart-service.service";
import {RequestOrder} from "../../model/RequestOrder";

@Component({
  selector: 'app-acc',
  templateUrl: './account.component.html',
  styleUrls: [
    './account.component.css'
  ]
})
export class AccountComponent implements OnInit {

  checkoutParentGroup: FormGroup;

  constructor(private formChildGroup: FormBuilder,
              private auth :AuthenticationServiceService,
              private router: Router,
              private orderService: OrderServiceService,
              private card: CartServiceService) { }

  da: UserData = new UserData();
  dataO: RequestOrder[];
  i=0;
  ngOnInit(): void {

    this.getAllReqOrder()

    this.myFormLogin()
  }
  async myFormLogin() {
     this.auth.getData(sessionStorage.getItem("email")).subscribe(
      data => {
        this.da = data;

        this.checkoutParentGroup = this.formChildGroup.group({
          user: this.formChildGroup.group({
            sSN: new FormControl(this.da.ssn, [
              Validators.required
            ]),
            email: new FormControl(this.da.email, [
              Validators.required
            ]),
            password: new FormControl(this.da.password, [
              Validators.required
            ]),
            confirmPassword: new FormControl(this.da.password, [
              Validators.required
            ]),
            firstName: new FormControl(this.da.firstName, [
              Validators.required
            ]),
            secondName: new FormControl(this.da.secondName, [
              Validators.required
            ]),
            thirdName: new FormControl(this.da.thirdName, [
              Validators.required
            ]),
            fourthName: new FormControl(this.da.fourthName, [
              Validators.required
            ]),
            city: new FormControl(this.da.city, [
              Validators.required
            ]),
            street: new FormControl(this.da.street, [
              Validators.required
            ]),
            building: new FormControl(this.da.building, [
              Validators.required
            ]),
            phone: new FormControl(this.da.phone, [
              Validators.required
            ]),
            gender: new FormControl(this.da.gender, [
              Validators.required
            ]),
            birthDate: new FormControl(this.da.birthDate, [
              Validators.required
            ])
          })
        })

      }
    )

  }

  getAllReqOrder(){
      this.auth.getDataOrders(sessionStorage.getItem("idRO"),sessionStorage.getItem("email")).subscribe(
      data => {
        this.dataO = data
      }
    )
  }
  done() {

    if (this.checkoutParentGroup.controls['user'].value.password !== this.checkoutParentGroup.controls['user'].value.confirmPassword) {
      alert("Password not matched !?")
      return
    }
    this.auth.up(
      this.checkoutParentGroup.controls['user'].value.sSN,
      this.checkoutParentGroup.controls['user'].value.email,
      this.checkoutParentGroup.controls['user'].value.password,
      this.checkoutParentGroup.controls['user'].value.firstName,
      this.checkoutParentGroup.controls['user'].value.secondName,
      this.checkoutParentGroup.controls['user'].value.thirdName,
      this.checkoutParentGroup.controls['user'].value.fourthName,
      this.checkoutParentGroup.controls['user'].value.city,
      this.checkoutParentGroup.controls['user'].value.street,
      this.checkoutParentGroup.controls['user'].value.building,
      this.checkoutParentGroup.controls['user'].value.phone,
      this.checkoutParentGroup.controls['user'].value.gender,
      this.checkoutParentGroup.controls['user'].value.birthDate
    ).subscribe({
      next: response => {
          this.router.navigateByUrl("/orders")
          alert("Success !")
      }
    })
  }

  get email(){
    return this.checkoutParentGroup.get('user.email')
  }
  get password(){
    return this.checkoutParentGroup.get('user.password')
  }

  getName() {
    return sessionStorage.getItem("name")
  }


  logOut() {
    this.card.orders = [];
    this.card.totalOrders.next(0);
    this.card.totalPrice.next(0);
    this.auth.logOut()
    this.router.navigateByUrl("/orders")
  }

  getI() {
    return ++this.i;
  }
}
