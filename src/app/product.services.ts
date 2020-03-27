import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Product } from './models/product'

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    api = 'https://5e7c3fdca917d7001668305b.mockapi.io/product/product';
    constructor(
      private http : HttpClient,
    ) { }
  
    getProductsFromApi(): Observable<Product[]>{
      return this.http.get<Product[]>(this.api);
    }
    
}