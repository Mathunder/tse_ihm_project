import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-infos',
  templateUrl: './product-infos.component.html',
  styleUrls: ['./product-infos.component.css']
})
export class ProductInfosComponent implements OnInit{

  product: any;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}


  ngOnInit(){
    const productId = +this.route.snapshot.params['id'];
    this.productService.getProdutById(productId).subscribe((product) => {
      this.product = product;
      console.log('Product:', this.product);
    });
  }

  ajoutPanier(): void {
    alert(this.product.name + ' a été ajouté à votre panier');
  }

  back(): void {
    this.router.navigateByUrl(`catalogue`);
  }
 
}
