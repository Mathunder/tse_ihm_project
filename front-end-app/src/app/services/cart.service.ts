import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  cartUrl = "assets/cart.json";

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.cartUrl);
  }
}
