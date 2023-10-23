import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfosComponent } from './product-infos.component';

describe('ProductInfosComponent', () => {
  let component: ProductInfosComponent;
  let fixture: ComponentFixture<ProductInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductInfosComponent]
    });
    fixture = TestBed.createComponent(ProductInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
