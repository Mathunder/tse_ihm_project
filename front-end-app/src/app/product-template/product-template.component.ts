import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/interfaces/product';

@Component({
  selector: 'product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})


export class ProductTemplateComponent implements OnInit {
  
  ngOnInit(): void {}

  @Input() product: any;

  constructor(private productService: ProductService, private router: Router ){}

  ajoutPanier(): void {
    alert(this.product.name + ' a été ajouté à votre panier');
  }
  details(){
    let currentLocation = this.router.url;

    this.router.navigateByUrl(`catalogue/${this.product.id}`);

    //alert('détails');
    //this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`);
  }

  
}
