// Conseguir separar as responsabilidades

import { Injectable } from '@angular/core';
import { MatSnackBar } from  '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor() { }

  // showOnConsole(msg: string): void {
  //   console.log(msg)
  // }

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
