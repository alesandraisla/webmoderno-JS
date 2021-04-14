
// Conseguir separar as responsabilidades

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from  '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { Product } from './product.model';
import { catchError, map } from 'rxjs/operators';

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

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  // inserir no backend um novo produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

 

  // Interagi com o backend
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  // Leitura requisição do tipo get
  readById(id: string): Observable<Product> {
    const url=`${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  // Atualização requisição do tipo put
  update(product: Product): Observable<Product> {
    const url =`${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

    // Exclusão requisição do tipo delete
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  // Mensagem de erro 
  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }
}
