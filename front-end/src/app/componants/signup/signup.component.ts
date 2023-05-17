import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './signup.component.css'
  ]
})
export class SignupComponent implements OnInit {

  checkoutParentGroup: FormGroup;

  constructor(private formChildGroup: FormBuilder,
              private auth :AuthenticationServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.myFormLogin()
  }
  myFormLogin(){
    this.checkoutParentGroup = this.formChildGroup.group({
      user:this.formChildGroup.group({
        sSN: new FormControl('',[
          Validators.required
        ]),
        email: new FormControl('',[
          Validators.required
        ]),
        password: new FormControl('',[
          Validators.required
        ]),
        confirmPassword: new FormControl('',[
          Validators.required
        ]),
        firstName: new FormControl('',[
          Validators.required
        ]),
        secondName: new FormControl('',[
          Validators.required
        ]),
        thirdName: new FormControl('',[
          Validators.required
        ]),
        fourthName: new FormControl('',[
          Validators.required
        ]),
        city: new FormControl('',[
          Validators.required
        ]),
        street: new FormControl('',[
          Validators.required
        ]),
        building: new FormControl('',[
          Validators.required
        ]),
        phone: new FormControl('',[
          Validators.required
        ]),
        gender: new FormControl('',[
          Validators.required
        ]),
        birthDate: new FormControl('',[
          Validators.required
        ]),
        repeatPassword: new FormControl('',[
          Validators.required
        ])
      })
    })
  }

  done() {
    if (this.checkoutParentGroup.controls['user'].value.password !== this.checkoutParentGroup.controls['user'].value.confirmPassword) {
      alert("Password not matched !?")
      return
    }
    // alert(this.checkoutParentGroup.controls['user'].value.sSN)
    // alert(this.checkoutParentGroup.controls['user'].value.email)
    // alert(this.checkoutParentGroup.controls['user'].value.password)
    // alert(this.checkoutParentGroup.controls['user'].value.firstName)
    // alert(this.checkoutParentGroup.controls['user'].value.secondName)
    // alert(this.checkoutParentGroup.controls['user'].value.birthDate)
    this.auth.createUser(
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
        if (response.result == 1){
          sessionStorage.setItem("emailActive",this.checkoutParentGroup.controls['user'].value.email),
          this.router.navigateByUrl("/orders")
        } else {
          alert("Email is Exist")
        }

      }
    })
  }

  get email(){
    return this.checkoutParentGroup.get('user.email')
  }
  get password(){
    return this.checkoutParentGroup.get('user.password')
  }

}
