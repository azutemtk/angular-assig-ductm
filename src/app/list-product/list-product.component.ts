import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.services';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products : Product [];

  constructor(
    private productService: ProductService
  ) { }

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
