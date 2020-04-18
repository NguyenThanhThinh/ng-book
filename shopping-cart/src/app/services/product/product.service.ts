import { Product } from './../../product-list/product.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      image: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      image: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }


}
