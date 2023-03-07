import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'fp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Product[] = [
    { id: '1', name: 'Prod1', price: 10.99 },
    { id: '2', name: 'Prod2', price: 100.99 },
    { id: '3', name: 'Prod3', price: 1.99 }
  ]
}
