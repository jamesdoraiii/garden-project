import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {

  public _product = {};

  @Input () set product(product: any) {
    this._product = product;
  }

  constructor() { }

  ngOnInit() {
  }

}
