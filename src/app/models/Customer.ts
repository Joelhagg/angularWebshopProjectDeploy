import { PayMethod } from "./PayMethod";

export class Customer {
    constructor(

       public firstname: string, 
       public lastname: string,
       public street: string,
       public houseNr: number,
       public email: string,

    ) {
    }
}
