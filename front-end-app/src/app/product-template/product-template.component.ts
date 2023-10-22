import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {
  
  ngOnInit(): void {}

  @Input() product: any;

  ajoutPanier(): void {
    alert(this.product.name + ' a été ajouté à votre panier');
  }
  details(){
    alert('détails');
    //this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`);
  }
}
