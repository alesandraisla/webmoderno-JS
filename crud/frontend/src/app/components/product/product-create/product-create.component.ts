import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
// Navegar para outra tela
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})



export class ProductCreateComponent implements OnInit {

  // atributoLegal = "sejadiferente"    
  constructor(private ProductService: ProductService,
      private router: Router) { }

  // ngOnInit(): void {
  //   this.ProductService.showOnConsole('teste...')
  // }

  ngOnInit(): void {
   
  }

  createProduct(): void {
    this.ProductService.showMessage('Produto criado')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  // Irá fazer um binding do atributo a partir de um evento
  // fazerAlgo(): void {
  //   console.log('Fazendo algo!')
  // }

}
