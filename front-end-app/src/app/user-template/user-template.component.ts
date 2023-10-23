import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent {

  ngOnInit(): void {}

  @Input() user: any;
}
