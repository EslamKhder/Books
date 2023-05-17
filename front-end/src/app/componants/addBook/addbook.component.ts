import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: [
    './addbook.component.css'
  ]
})
export class AddBookComponent implements OnInit {

  checkoutParentGroup: FormGroup;
  nameIma: string;
  constructor(private formChildGroup: FormBuilder,
              private auth :AuthenticationServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.myFormLogin()
  }
  myFormLogin(){
    this.checkoutParentGroup = this.formChildGroup.group({
      user:this.formChildGroup.group({
        name: new FormControl('',[
          Validators.required
        ]),
        categoryName: new FormControl('',[
          Validators.required
        ]),
        author: new FormControl('',[
          Validators.required
        ]),
        numberOfPages: new FormControl('',[
          Validators.required
        ]),
        description: new FormControl('',[
          Validators.required
        ]),
        price: new FormControl('',[
          Validators.required
        ]),
        img: new FormControl('',[
          Validators.required
        ])
      })
    })
  }

  done() {

    // alert(this.checkoutParentGroup.controls['user'].value.name)
    // alert(this.checkoutParentGroup.controls['user'].value.categoryName)
    // alert(this.checkoutParentGroup.controls['user'].value.author)
    // alert(this.checkoutParentGroup.controls['user'].value.numberOfPages)
    // alert(this.checkoutParentGroup.controls['user'].value.description)
    // alert(this.checkoutParentGroup.controls['user'].value.price)
    // alert(this.nameIma)
    this.auth.addBook(
      this.checkoutParentGroup.controls['user'].value.name,
      this.checkoutParentGroup.controls['user'].value.categoryName,
      this.checkoutParentGroup.controls['user'].value.author,
      this.checkoutParentGroup.controls['user'].value.numberOfPages,
      this.checkoutParentGroup.controls['user'].value.description,
      this.checkoutParentGroup.controls['user'].value.price,
      this.nameIma
    ).subscribe({
      next: response => {
          alert("Created!!!!!!!!")
          this.router.navigateByUrl("/orders")
      }
    })
  }

  get email(){
    return this.checkoutParentGroup.get('user.email')
  }
  get password(){
    return this.checkoutParentGroup.get('user.password')
  }

  onFileSelected(event) {
    if(event.target.files.length > 0)
    {
      this.nameIma = event.target.files[0].name;
    }
  }
}
