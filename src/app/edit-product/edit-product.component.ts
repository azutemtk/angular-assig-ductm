import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.services';
import { Product } from '../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
    private router: Router, private route : ActivatedRoute)  { }

  ngOnInit(): void {
  this.getProductByID();
  }

  getProductByID(){
    this.route.params.subscribe(param =>{
      this.productService.getProductFromApi(param.productID).subscribe(data =>{
        this.product = data;
      })
    })
  };

  editProduct(){
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/manager/product")
    });
}

}
