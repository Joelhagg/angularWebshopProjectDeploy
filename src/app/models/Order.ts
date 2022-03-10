import { OrderRows } from "./OrderRows"

export class Order {

        id: number = 0;
        companyId: number = 19
        created: string = new Date().toISOString().slice(0, -5)
        createdBy: string;
        paymentMethod: string;
        totalPrice: number;
        status: number = 0
        orderRows: OrderRows[]

    constructor(
        totalPrice: number,
        paymentMethod: string,
        createdBy: string,
        orderRows: OrderRows[] 
    ) {
        this.createdBy = createdBy
        this.totalPrice = totalPrice;
        this.paymentMethod = paymentMethod
        this.orderRows = orderRows
    }
}