import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.services';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor( private productService: ProductService) { }

  products : Product [];
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProductsFromApi().subscribe(data =>{
      console.log(data);
      this.products=data;
  });
}
}
