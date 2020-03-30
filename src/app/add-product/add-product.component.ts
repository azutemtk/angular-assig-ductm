import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.services';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  
  constructor( private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl("/manager/product")
   } );
 }
}
