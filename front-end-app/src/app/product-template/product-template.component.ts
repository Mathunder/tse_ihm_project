import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {
  
  ngOnInit(): void {}

  @Input() product: any;
}
