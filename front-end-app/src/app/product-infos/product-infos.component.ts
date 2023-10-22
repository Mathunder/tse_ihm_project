import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/interfaces/product';

@Component({
  selector: 'app-product-infos',
  templateUrl: './product-infos.component.html',
  styleUrls: ['./product-infos.component.css']
})
export class ProductInfosComponent implements OnInit{

  product: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}


  ngOnInit(){
    const productId = +this.route.snapshot.params['id'];
    this.product = this.productService.getProdutById(productId); 
  }
 
}
