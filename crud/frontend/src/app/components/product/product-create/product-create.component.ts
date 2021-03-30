import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  atributoLegal = "qualquer"

  constructor() { }

  ngOnInit(): void {
  }

  // Irá fazer um binding do atributo a partir de um evento
  fazerAlgo(): void {
    console.log('Fazendo algo!')
  }



}
