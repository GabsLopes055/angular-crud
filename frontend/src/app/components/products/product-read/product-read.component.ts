import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {

  products!: Product[];

  DataSource = this.products;

  displayedColumns: string[] = ['id', 'name', 'price', 'edit', 'delete'];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }

  updateProduct(id: string) {
    this.router.navigate(['/products/update', id]);
  }

  cancel() {
    this.router.navigate(['products'])
  }

}
