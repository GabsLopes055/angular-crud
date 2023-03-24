
import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {

  product!: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(products => {
      this.product = products;
    });
  }

  deleteProduct(id: any): void {
    this.productService.deleteProduct(id).subscribe((Product) => {
      this.productService.showMessage('Produto Excluido');
      this.router.navigate(['products/list']);
    });
  }
  
  cancell(): void {
    this.router.navigate(['products/list']);
  };


}
