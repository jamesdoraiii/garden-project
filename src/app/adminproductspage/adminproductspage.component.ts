import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-adminproductspage',
  templateUrl: './adminproductspage.component.html',
  styleUrls: ['./adminproductspage.component.css']
})

export class AdminproductspageComponent implements OnInit {

  @Input('token') token: string;

  products: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productsService.getProducts().subscribe(Products => {
      console.log(Products)
      this.products = Products;
    })
  }

  deleteProduct(productid): void {

    this.productsService.deleteProduct(productid, this.token).subscribe(Products => {
      console.log(Products)
      this.products = Products;
      this.getProducts();
    })

  }

}
