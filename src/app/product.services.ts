import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Product } from './models/product'

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    api = 'http://5e7c3fdca917d7001668305b.mockapi.io/product/product';
    constructor(
      private http : HttpClient,
    ) { }
  
    getProductsFromApi(): Observable<Product[]>{
      return this.http.get<Product[]>(this.api);
    }

    getProductFromApi(id): Observable<Product>{
      return this.http.get<Product>(`${this.api}/${id}`);
    }

    addProduct(product): Observable<Product>{
      return this.http.post<Product>(`${this.api}`, product);
    }
  
    updateProduct(product): Observable<Product>{
       return this.http.put<Product>(`${this.api}/${product.id}`, product);
    }
  
    deleteProduct(product){
      return this.http.delete<Product>(`${this.api}/${product.id}`,product);
    }
  
    
}