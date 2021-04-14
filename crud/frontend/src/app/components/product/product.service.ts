// Conseguir separar as responsabilidades

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from  '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor() { }

  // showOnConsole(msg: string): void {
  //   console.log(msg)
  // }

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // inserir no backend um novo produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  // Interagi com o backend
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  // Leitura requisição do tipo get
  readById(id: string): Observable<Product> {
    const url=`${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  // Atualização requisição do tipo put
  update(product: Product): Observable<Product> {
    const url =`${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

    // Exclusão requisição do tipo delete
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url);
  }
}
