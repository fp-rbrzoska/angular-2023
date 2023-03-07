import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'fp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products?: Product[];

  constructor( private _productsService: ProductService) {
    this.products = _productsService.products;
  }
}
