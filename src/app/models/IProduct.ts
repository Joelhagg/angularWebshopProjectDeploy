import { ProductCategory } from "./ProductCategory";

export interface IProduct {

         id: number,
         name: string,
         description: string,
         price: number,
         imageUrl: string,
         year: number,
         added: Date,
         productCategory: ProductCategory[]


}