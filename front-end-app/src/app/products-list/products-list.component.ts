import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products: Observable<Product[]> | undefined;

  showProduct() {
    this.products = this.productService.getProduct();
  }

  ngOnInit(): void {
    this.showProduct();
  }
}
