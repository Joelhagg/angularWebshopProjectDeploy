import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderRows } from '../models/OrderRows';

@Injectable({
  providedIn: 'root'
})
export class OrderRowsService {

  private toorderRow = new BehaviorSubject<any>([])
  orderRowArray = this.toorderRow.asObservable()

  constructor() { }

  orderRowsToCheckout(row: OrderRows) {
    this.toorderRow.next(row)
  }
  
}
