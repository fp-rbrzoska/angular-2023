import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable()
export class ProductService {

  private _products: Product[] = [
    { id: '1', name: 'Prod1', price: 10.99 },
    { id: '2', name: 'Prod2', price: 100.99 },
    { id: '3', name: 'Prod3', price: 1.99 }
  ]

  get products() {
    return this._products;
  }
  
  constructor() { }
}
