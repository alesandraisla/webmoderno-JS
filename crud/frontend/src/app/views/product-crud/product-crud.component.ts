import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
// Injeção de dependências -> um terceiro fornecer a instância de um objeto
// Com a importação do router e a função constructor ao clicar no botão irá para a pag /products/create
  constructor(private router: Router, private headerService: HeaderService) { 

      headerService.HeaderData = {
        title: 'Cadastro de Produtos',
        icon: 'storefront',
        routerUrl: '/products'
      }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    // console.log('Navegando...')
    this.router.navigate(['/products/create'])
  }

}
