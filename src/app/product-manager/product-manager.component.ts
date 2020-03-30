import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.services';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  constructor( private productService: ProductService, private router: Router) { }

  products : Product [];
  page = 1;
  pageSize = 10;
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProductsFromApi().subscribe(data =>{
      console.log(data);
      this.products=data;
  });
}


deleteProduct(product){
  this.productService.deleteProduct(product).subscribe(data =>{
   console.log("Da xoa");
   this.getProducts();
  }) ; 
}

backToManager(){
  this.router.navigateByUrl("/manager")
}

}
