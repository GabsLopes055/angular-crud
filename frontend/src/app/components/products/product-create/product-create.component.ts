import { Product } from '../product.model';

import { Route, Router } from '@angular/router';
import { ProductService } from '../product.service';

import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  constructor(private productService: ProductService, private router: Router) { }

  product: Product = {
    name: '',
    price: 0
  }

  createdProduct() {
    this.productService.created(this.product).subscribe(() => {
      this.router.navigate(["/products"]);
      this.productService.showMessage('Produto Criado !');
    });
  }

  cancel() {
    this.router.navigate(["/products"])
  }


}
