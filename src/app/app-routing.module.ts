import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';


const routes: Routes = [
    {
      path: 'login', component: LoginComponent 
    },
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
