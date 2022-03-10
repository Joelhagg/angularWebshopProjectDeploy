import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/IProduct'
import { Customer } from 'src/app/models/Customer'
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { Order } from 'src/app/models/Order';
import { SendOrderService } from 'src/app/services/send-order.service';
import { OrderRowsService } from 'src/app/services/order-rows.service';
import { OrderRows } from 'src/app/models/OrderRows';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  userForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    street: new FormControl("", [Validators.required, Validators.minLength(5)]),
    houseNr: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    payMethod: new FormControl("", [Validators.required])
  })

  products: IProduct[] = [];

  totalPrice: number = 0;

  rowArray: OrderRows[] = []
  
  constructor(private addToCart: AddToCartService, private service: SendOrderService, private toorderRow: OrderRowsService) { }

 
  ngOnInit(): void { 
     
    this.addToCart.currentShopingCart.subscribe(products => this.products = products)

    this.products.forEach(item => {
      this.totalPrice += (item.price)
      
    })

    this.toorderRow.orderRowArray.subscribe(orderRow => this.rowArray = orderRow)
    
  }

  submitCustomer() {

    let customer = new Customer(
      this.userForm.value.firstname, 
      this.userForm.value.lastname, 
      this.userForm.value.street, 
      this.userForm.value.houseNr, 
      this.userForm.value.email
      )

    this.makeOrder(customer)
    this.userForm.reset()

  }

  makeOrder(customer: Customer) {

    let order = new Order(this.totalPrice, this.userForm.value.payMethod, this.userForm.value.firstname + ' ' + this.userForm.value.lastname, this.rowArray)
  
    this.service.makeOrder(order) 

    location.reload()

    alert('Tack för att ni handlade hos oss!')

  }

  removeItem(i: any) {

    const tempProducts = [...this.products]
    tempProducts.splice(i, 1)
    this.products = tempProducts

    let tempPrice = 0
    this.products.forEach(item => {
      tempPrice += (item.price)
    })
    this.totalPrice = tempPrice 
  }
}