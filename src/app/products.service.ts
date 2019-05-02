import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private dbUrl = "https://efa-gardenapp-backend.herokuapp.com/api/product"

  constructor(private http: HttpClient) { }

  getProducts() : Observable<any> {
    return this.http.get<any>(this.dbUrl);
  }
}
