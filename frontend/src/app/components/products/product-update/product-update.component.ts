
import { Product } from './../product.model';

import { ProductService } from './../product.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  product!: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(products => {
      this.product = products;
    });

  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe((Product) => {
      this.productService.showMessage('Produto Editado');
      this.router.navigate(['products/list']);
    });
  };

  cancell(): void {
    this.router.navigate(['products/list']);
  };


}
