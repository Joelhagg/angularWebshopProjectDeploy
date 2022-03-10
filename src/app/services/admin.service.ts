import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private orderForAdmin = new Subject<Order[]>();
  orderForAdmin$ = this.orderForAdmin.asObservable()

  constructor(private http: HttpClient) { }


  getOrdersToAdmin() {
    this.http.get<Order[]>(environment.getOrdersToAdminUrl).subscribe((data: Order[]) => this.orderForAdmin.next(data))
  }

  deleteOrderFromAdmin(id: number) {
    this.http.delete(environment.deleteOrderFromAdmin1 + id + environment.deleteOrderFromAdmin2).subscribe(() => this.getOrdersToAdmin())
  }
}
