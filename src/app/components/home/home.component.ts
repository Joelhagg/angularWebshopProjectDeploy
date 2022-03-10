import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { OrderRows } from 'src/app/models/OrderRows';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { GetProductsService } from 'src/app/services/get-products.service';
import { OrderRowsService } from 'src/app/services/order-rows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

products: IProduct[] = [];

orderRows: OrderRows[] = []

movie: IProduct[] = [{ id: 0, name: '', description: '', price: 0, imageUrl: '', year: 0, added: new Date(), productCategory: []}];

constructor(private service: GetProductsService, private addToCart: AddToCartService, private toorderRow: OrderRowsService) { }

ngOnInit(): void { 

  this.service.movies$.subscribe((value) => {
    this.movie = value;

  })
  this.service.AddToCartService
  
  this.service.getMovies();

  this.addToCart.currentShopingCart.subscribe(products => this.products = products)

  this.toorderRow.orderRowArray.subscribe(orderRow => this.orderRows = orderRow)
  
}

addToCartButton(item: IProduct) {

  this.products.push(item)

  let containsItem = false;
   this.orderRows.map(row => {
      if (row.productId === item.id) {
          containsItem = true;
          row.amount++;
      }
      return row;
    });
  
  if (!containsItem) {
    this.orderRows.push({
        id: 0,
        productId: item.id,
        product: '',
        amount: 1,
        orderId: 0
      });
    }
  } 
}