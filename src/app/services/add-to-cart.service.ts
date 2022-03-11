import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/IProduct';


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  private addToCart = new BehaviorSubject<any>([])
  currentShopingCart = this.addToCart.asObservable()

  constructor() { }

  addItemToCart(products: IProduct) {
    this.addToCart.next(products)
    
  }
}
