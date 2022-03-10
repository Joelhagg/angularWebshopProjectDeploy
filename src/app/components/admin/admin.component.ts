import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: Order[] = []

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.getOrdersForAdmin()
  }

  getOrdersForAdmin() {
    this.service.orderForAdmin$.subscribe((data) => {
      this.orders = data;
    })
    this.service.getOrdersToAdmin()
  }

  deleteOrder(id: number) {
    this.service.deleteOrderFromAdmin(id  )
  }
}
