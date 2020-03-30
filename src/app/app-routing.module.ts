import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { HomeComponent } from './home/home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ManagerComponent } from './manager/manager.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
    {
    path: '', redirectTo:'home', pathMatch:'full'
    },
    {
      path: 'login', component: LoginComponent 
    },
    {
      path: 'list', component: ListProductComponent 
    },
    {
      path: 'home', component: HomeComponent 
    },
    {
      path: 'manager', component: ManagerComponent,
    },
    {
      path: 'manager/product', component: ProductManagerComponent,
    },
    {
      path: 'manager/product/add', component: AddProductComponent,
    },
    {
      path: 'manager/product/edit/:productID', component: EditProductComponent,
    },
    { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
