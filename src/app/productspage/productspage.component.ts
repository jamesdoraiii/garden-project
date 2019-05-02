import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent implements OnInit {

  products: any;

  constructor(private productsService : ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productsService.getProducts().subscribe(Products => {
      console.log(Products)
      this.products = Products;
    })
  }

  test(): void{
    console.log(this.products)
  }

}
