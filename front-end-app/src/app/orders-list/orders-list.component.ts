import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { Cart } from 'src/interfaces/cart';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor(private cartService: CartService) {}

  cart: Observable<Cart> | undefined;

  showCart() {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.showCart();
  }

}
