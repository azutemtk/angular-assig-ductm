import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';


const routes: Routes = [
    {
      path: 'list', component: ListProductComponent 
    },
    {
      path: 'manager', component: ProductManagerComponent 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
