import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productUrl = "assets/products.json";

  getProduct():Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getProdutById(productId: number): Observable<Product | undefined> {
    return this.getProduct().pipe(
      map(products => products.find(product => product.id === productId))
    );
  }
}
