import { catchError, map } from 'rxjs/operators';

import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }


  errorHandler(e: any): Observable <any> {
    this.showMessage('Erro interno !', true)
    return EMPTY;
  }

  created(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Product>(url);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: string): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Product>(url);
  }


}
