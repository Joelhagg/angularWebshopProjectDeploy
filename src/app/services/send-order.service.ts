import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class SendOrderService {

  private ordersArray: Order[] = []

  constructor(private http: HttpClient) { }

  makeOrder(order: Order) {

    this.ordersArray.push(order);
    
    return this.http.post<Order>(environment.postToApiUrl, order).subscribe(data => {
      console.log(data);
    })
  }

  viewOrders(): Order[] {

    return this.ordersArray

  }
}