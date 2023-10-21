import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productUrl = "assets/products.json";

  getProduct():Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
